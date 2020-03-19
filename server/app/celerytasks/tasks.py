import os
import time
import random
import cv2
import numpy as np
import csv
import pafy
import logging

from flask import current_app, render_template
from server.app import app_celerey

import server.app.scenedetect
from server.app.scenedetect.video_manager  import VideoManager
from server.app.scenedetect.scene_manager  import SceneManager
from server.app.scenedetect.frame_timecode import FrameTimecode
from server.app.scenedetect.stats_manager  import StatsManager
from server.app.scenedetect.detectors      import ContentDetector

from flask_sse import sse

from server.app import db
from server.app.models.movie import Movie
from server.app.models.tag import   Tag
from server.app.services.movie_service import MovieService
from server.app.services.tag_service import TagService

from server.app.services.movie_utils import stripeBaseDirectory, keframeBaseDirectory, keyFrameName, stripeFileName
from celery.utils.log import get_task_logger


from server.app.celerytasks.document_generator import generateDocumentAndCaches


movie_service = MovieService()
tag_service   = TagService()


# UPDATE PROGRESS in MOVIE STORE
def syncMovieInClient (movie, taskID):

#    print (taskID, movie.stripeStatus)
    payload =  { 'id': movie.uuid, 'changes':{'stripeStatus':movie.stripeStatus, 'numberOfStripes':movie.numberOfStripes }}
    sse.publish(  type='greeting',
                  data=
                  { 'storeID':'MOVIE', 
                    'operation':'UPDATE',
                    'payload' : payload
                  }
               ); 
    
    syncTaskInClient (taskID, movie.stripeStatus)
           

# UPDATE TASK STORE
def syncTaskListInClient ():
    print ("*********** syncTaskListInClient *****************")
    payload =  { }
    sse.publish(  type='greeting',
                  data=
                  { 'storeID':'TASK', 
                    'operation':'LOAD',
                    'payload' : payload
                  }
               );          

# UPDATE PROGRESS in TASK STORE
def syncTaskInClient (taskid, progress):
    payload =  { 'id': taskid, 'changes':{'progress':progress }}
    sse.publish(  type='greeting',
                  data=
                  { 'storeID':'TASK', 
                    'operation':'UPDATE',
                    'payload' : payload
                  }
               );   
#
# ENTRY POINT FOR COMMANDS
#
def analyzeMovieSync(movieId, command):
#    print ("************  execute ", movieId, command['command'] )
    syncTaskListInClient ()  
    if (command['command'] == "[MOVIE] MAKE STRIPES"):
       generateStripes.delay(movieId, command['command'] )
    if (command['command'] == "[MOVIE] ANALYZE CUTS"):
       computeCuts.delay (movieId, command['command'] )
    if (command['command'] == "[MOVIE] MAKE DOC AND IMAGES"):
       generateDocAndOmImages.delay (movieId, command['command'] )
    return 1

#
# GENERATE DOC AND OM IMAGES
#
@app_celerey.task(bind=True, name='tasks.generateDocAndOmImages')
def generateDocAndOmImages (self, movieID, actionID):

    movie = movie_service.get(movieID)
    id = movieID

    def logProgressCutDetection(t, f):      
        movie = movie_service.get(id)
        perzi = 0    
        
        if (t > 0):
            perz =  100.0 * float(f) / float (t)
            perzi = 1.0 * int (perz+0.5)

        self.update_state (
                    state='PROGRESS', 
                    meta={'movieID': movie.uuid, 'movieName': movie.name, 'actionID' :actionID, 'progress': perzi} )

        if (perzi != movie.docStatus):
            movie.docStatus =  perzi
            movie = movie_service.save(movie)
            payload =  { 'id': movie.uuid, 'changes':{'docStatus':movie.docStatus }}
            sse.publish(  type='greeting',
                  data=
                  { 'storeID':'MOVIE', 
                    'operation':'UPDATE',
                    'payload' : payload
                  }
               ); 

            syncTaskInClient (self.request.id, movie.docStatus)   
    
    movie.docStatus =  0
    movie = movie_service.save(movie)
 
    self.update_state (
         state='PROGRESS', 
         meta={'movieID': movie.uuid, 'movieName': movie.name, 'actionID' :actionID, 'progress': 0}    )
    syncTaskListInClient ()

    d = generateDocumentAndCaches (movieID, progresscallback = logProgressCutDetection) 

    self.update_state (
         state='FINISHED', 
         meta={'movieID': movie.uuid, 'movieName': movie.name, 'actionID' :actionID, 'progress': 100}    )
    syncTaskListInClient ()

 
#
# GENERATE STRIPE IMAGE DATA STRUCTURE
#
@app_celerey.task(bind=True, name='tasks.generateStripes')
def generateStripes(self, movieID, actionID):
     syncTaskListInClient ()
     movie = movie_service.get(movieID)

     if (movie.source  == "YOUTUBE"):
        vPafy = pafy.new(movie.uri)
        play = vPafy.getbest()
        cap = cv2.VideoCapture(play.url)

     if (movie.source  == "FILESYSTEM"):
        localdirname = os.path.dirname("/data/movies/") 
        filename = os.path.join(localdirname, movie.uri)   
        cap = cv2.VideoCapture(filename)

     length = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
     width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
     height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
     fps = cap.get(cv2.CAP_PROP_FPS)
     print("G STRIPES - FOR  ", length, width, height, fps)

     stripeimagedir = stripeBaseDirectory (movie)
#     print("dir to write the stripes", stripeimagedir)
     if  not os.path.exists(stripeimagedir):
        os.makedirs(stripeimagedir)

     maxstripesize = 1500
     stripeImage = np.zeros((height,maxstripesize,3), np.uint8)

     count    = 0
     countsec = 0
     countbig = 0
     seconds  = 0
     stripeimagecounter = 0
     stripenumber       = 0
     writelaststripe = 0

     movie.stripeStatus = 0.0
     movie.numberOfStripes = 0
     movie = movie_service.save(movie)
     syncMovieInClient (movie, self.request.id)    

     self.update_state (
         state='PROGRESS', 
         meta={'movieID': movie.uuid, 'actionID' :actionID, 'progress': 0}  ) 

     success = 1
     while success:

        success, image = cap.read()

        if (success):
            stripe = image [0:height, int(width/2):int(width/2)+1]
            stripeImage [0:height, stripeimagecounter:stripeimagecounter+1] = stripe
            count    += 1
            countsec += 1
            countbig += 1
            stripeimagecounter +=1

            if  (countsec > 2*fps):
                countsec = 0
                seconds +=2
                perz =  100.0 * float(count+1) / float (length)
                perzi = int (perz+0.5)

                self.update_state (
                    state='PROGRESS', 
                    meta={'movieID': movie.uuid, 'movieName': movie.name, 'actionID' :actionID, 'progress': perzi} )

                if (perzi != movie.stripeStatus):
                    movie.stripeStatus = 1.0 * perzi
                    movie = movie_service.save(movie)
                    syncMovieInClient (movie, self.request.id)    

            if (countbig == 10*fps):
                countbig = 0

            if (stripeimagecounter == maxstripesize):
                fn = stripeFileName (movie, stripenumber)
                cv2.imwrite(fn,  stripeImage)
                stripeImage = np.zeros((height, maxstripesize, 3), np.uint8)
                stripeimagecounter = 0
                stripenumber += 1
                writelaststripe = 1
                movie.numberOfStripes = stripenumber + 1
                movie = movie_service.save(movie)
                syncMovieInClient (movie, self.request.id)   

     if (writelaststripe):
        fn = stripeFileName(movie, stripenumber)
        cv2.imwrite(fn, stripeImage)

     movie.stripeStatus = 100.0
     movie.numberOfStripes = stripenumber + 1
     movie = movie_service.save(movie)

     syncMovieInClient (movie, self.request.id)   
     self.update_state (
         state='FINISHED', 
         meta={'movieID': movie.uuid, 'actionID' :actionID, 'progress': 100}    )
     
     syncTaskListInClient ()     


#
# ANALYZE CUTS
#
@app_celerey.task(bind=True, name='tasks.computeCuts')
def computeCuts(self, movieID, actionID):
    syncTaskListInClient ()     
    movie = movie_service.get(movieID)

    def logProgressCutDetection(id, t, f):      
        movie = movie_service.get(id)
        perz =  100.0 * float(f) / float (t)
        perzi = 1.0 * int (perz+0.5)

        self.update_state (
                    state='PROGRESS', 
                    meta={'movieID': movie.uuid, 'movieName': movie.name, 'actionID' :actionID, 'progress': perzi} )

        if (perzi != movie.cutStatus):
            movie.cutStatus =  perzi
            movie = movie_service.save(movie)
            payload =  { 'id': movie.uuid, 'changes':{'cutStatus':movie.cutStatus }}
            sse.publish(  type='greeting',
                  data=
                  { 'storeID':'MOVIE', 
                    'operation':'UPDATE',
                    'payload' : payload
                  }
               ); 

            syncTaskInClient (self.request.id, movie.cutStatus)   

    tags = db.session.query(Tag) \
        .filter(Tag.movieID == movieID) \
        .delete()

    if (movie.source  == "YOUTUBE"):
        vPafy = pafy.new(movie.uri)
        play = vPafy.getbest()
        cap = cv2.VideoCapture(play.url)

    if (movie.source  == "FILESYSTEM"):
        localdirname = os.path.dirname("/data/movies/") 
        filename = os.path.join(localdirname, movie.uri)   
        cap = cv2.VideoCapture(filename)

    stats_manager = StatsManager()
    scene_manager = SceneManager(stats_manager)
    scene_manager.add_detector(ContentDetector(threshold=27.0, min_scene_len=15))

    n = scene_manager.detect_scenes(frame_source=cap, id=movieID, progresscallback = logProgressCutDetection, show_progress=False )

    self.update_state (
         state='FINISHED', 
         meta={'movieID': movie.uuid, 'actionID' :actionID, 'progress': 100}    )
    syncTaskListInClient ()
    print (n)

#
# COMPUTE OM IMAGES
#

@app_celerey.task(bind=True, name='tasks.computeOmImages')
def computeOmImages(self, movieID, actionID):
    syncTaskListInClient ()
    movie = movie_service.get(movieID)
    cuts = movie.tags
    self.update_state (
         state='FINISHED', 
         meta={'movieID': movie.uuid, 'movieName': movie.name, 'actionID' :actionID, 'progress': 100}    )
    syncTaskListInClient ()


def testyoutube():
    url = 'https://youtu.be/4iwyvroMhDE'
    vPafy = pafy.new(url)
    print (vPafy)
    play = vPafy.getbest()
    print (play)
    print(play.url)
    cap = cv2.VideoCapture(play.url)

    length = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
    height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
    fps = cap.get(cv2.CAP_PROP_FPS)
    print("OPENING THE VIDEO WITH ", length, width, height, fps)

def testlocalfile():
    filename = 'server/TESTDATA/2017-11-23 08-24-16.mp4'
    cap = cv2.VideoCapture(filename)
    length = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
    height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
    fps = cap.get(cv2.CAP_PROP_FPS)
    print("OPENING THE VIDEO WITH ", length, width, height, fps)