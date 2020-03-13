# -*- coding: utf-8 -*-
"""User Route for Demo application."""
import cv2
import numpy as np
import csv
import pafy
import logging
import io
import os
import uuid
import json
import math


from server.app.services.movie_utils import stripeBaseDirectory, keframeBaseDirectory, keyFrameName, stripeFileName, stripeStaticURL, movieCacheDirectory, movieFileName
from server.app import db
from server.app.models.movie import Movie
from server.app.models.tag import   Tag
from server.app.models.document import  Document
from server.app.models.content_element import  ContentElement

from server.app.services.movie_service import MovieService
from server.app.services.document_service import DocumentService

SECONDS_PER_OMI = 4
SMALLIMAGES     = 4
SMALLIMAGEWITH = 100


movie_service = MovieService()
document_service = DocumentService()
staticFN = 0
  
def generateDocumentAndCaches (movieID, progresscallback):
    movie = movie_service.get(movieID)
    if (movie.cutStatus == 100.0):

          docuuid = str(uuid.uuid4())
          d = Document(uuid=docuuid, name=movie.name+ " - default document",
                  contentIndex="", contentElements=[])
          db.session.add(d)
          db.session.commit()

          print("DOCUMENT CREATED WITH ID ", d.id)
          cuts = sorted([x.as_dict() for x in movie.tags], key=lambda k: k['fn'])
          print(cuts)

          startfn = 0
          ces = []
          ce_list = []


          maxframesPerOmi = round (movie.fps * SECONDS_PER_OMI)

          todolistCache = []     
          for c in cuts:   
               endfn = c['fn']-1
               n = math.ceil ( (endfn-startfn+1) / maxframesPerOmi )
               content = {'movieuuid':movie.uuid, 's':startfn, 'e':endfn, 'n': n}
               uuidstr = str(uuid.uuid4())
               ce = ContentElement(uuid = uuidstr, 
                                   documentID=d.id,
                                   contentType="movieref", 
                                   content=json.dumps(content))

               startfn = c['fn']
               ces.append(ce)
               todolistCache.append(content)
              
               ce_list.append (uuidstr)

          uuidstr = str(uuid.uuid4())
          endfn = movie.numberOfFrames - 1
          content = {'movieuuid':movie.uuid, 's':startfn, 'e':endfn, 'n': n}
          todolistCache.append(content)

          ce = ContentElement(uuid = uuidstr, 
                              documentID=d.id,
                              contentType="movieref", 
                              content=json.dumps(content))
          ces.append(ce)
          ce_list.append (uuidstr)
          d.contentElements = ces
          d.contentIndex = json.dumps(ce_list)
          db.session.commit()

          generateSUBOMIcaches (movie, todolistCache, progresscallback)

    else:
          print("WE CAN NOT GENERATE A DOCUMENT")
    return d


#  ####################################################################
#  scan the whole movie and generate the OM Image
#  we do this in a sequential way, as most content is interframe coded
#  ####################################################################

def generateSUBOMIcaches (movie, todolistCache, progresscallback):

     aspectratio = movie.height / movie.width

     BIGIMAGEWITH = SMALLIMAGEWITH * SMALLIMAGES
     SMALLIMAGEHEIGHT = round(SMALLIMAGEWITH * aspectratio)
     BIGIMAGEHEIGTH = round(BIGIMAGEWITH * aspectratio)
     STRIPEHEIGHT = BIGIMAGEHEIGTH
     HEIGHT = STRIPEHEIGHT + SMALLIMAGEHEIGHT + BIGIMAGEHEIGTH
     WIDTH  = BIGIMAGEWITH
  
     staticFN  = 0

     
     if (movie.source  == "YOUTUBE"):
        vPafy = pafy.new(movie.uri)
        play = vPafy.getbest()
        cap = cv2.VideoCapture(play.url)
     if (movie.source  == "FILESYSTEM"):
        filename = movieFileName (movie)   
        cap = cv2.VideoCapture(filename)

     staticFN = 0
     basdir = movieCacheDirectory(movie)
     basdir = os.path.join(basdir, "omi")   

     if  not os.path.exists(basdir):
        os.makedirs(basdir)

     # make a even longer TODO list from OMIs tu SUBOMIs
     subomis = []
     for omidesc in todolistCache:
          s = omidesc["s"]
          e = omidesc["e"]
          n = omidesc["n"]
        
          dirnameomi = os.path.join(basdir,   "%08d_%08d" % (s,e) )
          if  not os.path.exists(dirnameomi):
                  os.makedirs(dirnameomi)

          deltastripes   =  (e-s+1) / n
          deltasmallimages  =  (e-s) / (n*SMALLIMAGES-1)          
          for si in range (n):
               s_str = round (s +    si    * deltastripes)
               e_str = round (s +    (si+1)* deltastripes) - 1 
               center = round (s +    si    * deltastripes + deltastripes/2)
               smallimages = []
               for sii in range (SMALLIMAGES):
                    si_fnr =  round (s +    si * deltasmallimages * SMALLIMAGES + sii * deltasmallimages)            
                    smallimages.append (si_fnr)

               filenamesubomi = os.path.join(dirnameomi,   "%08d.jpg" % si)
               subomi = {'start': s_str, 'end': e_str, 'smallimages':smallimages, 'center':center, 'fn': filenamesubomi}
               subomis.append (subomi)
 
     success = 1
     insideOMImage = False
     subomindex = 0
     framenumber = 0

     while success:
        success, image = cap.read()
        if (success):
          subomi = subomis[subomindex]
          # at the start frame
          #print (subomi)
          if subomi['start'] == framenumber:
                  if (framenumber > 0):       
                       progresscallback (movie.numberOfFrames , framenumber )

                  stripewidth = subomi['end'] - subomi['start']  + 1
                  omimage = np.zeros((HEIGHT,WIDTH,3), np.uint8)
                  stripeimage = np.zeros((movie.height,stripewidth,3), np.uint8)
                  stripeimagecounter = 0
                  smallimagestopaste = subomi['smallimages']
                  smallimagestopaste.append (-1)
                  smallimagepos = 0
                  insideOMImage = True

          if insideOMImage:
               stripe = image [0:movie.height, int(movie.width/2):int(movie.width/2)+1]
               stripeimage [0:movie.height, stripeimagecounter:stripeimagecounter+1] = stripe
               stripeimagecounter = stripeimagecounter + 1
               if subomi['center'] == framenumber:
                 
                    imagescaled = cv2.resize(image, (BIGIMAGEWITH, BIGIMAGEHEIGTH))
                    ystart = 0
                    yend   = BIGIMAGEHEIGTH
                    xstart = 0
                    xend   = BIGIMAGEWITH
                    omimage[ystart:yend, xstart:xend] = imagescaled
          
               if smallimagestopaste[0] == framenumber:
                    smallimagestopaste.pop(0)
                    smallimagescaled = cv2.resize(image, (SMALLIMAGEWITH, SMALLIMAGEHEIGHT))
                    ystart = BIGIMAGEHEIGTH
                    yend   = BIGIMAGEHEIGTH + SMALLIMAGEHEIGHT
                    xstart = smallimagepos * SMALLIMAGEWITH
                    xend   = xstart + SMALLIMAGEWITH
                    omimage[ystart:yend, xstart:xend] = smallimagescaled
                    smallimagepos = smallimagepos +1

               if subomi['end'] == framenumber:
                    stripeimagescaled = cv2.resize(stripeimage, (WIDTH, STRIPEHEIGHT))     
                    ystart = BIGIMAGEHEIGTH + SMALLIMAGEHEIGHT
                    yend   = ystart + STRIPEHEIGHT
                    xstart = 0
                    xend   = WIDTH
                    omimage[ystart:yend, xstart:xend] = stripeimagescaled
                    cv2.imwrite(subomi['fn'],  omimage)
                    subomindex = subomindex+1
                    insideOMImage = False
                    
          framenumber = framenumber + 1

     progresscallback (movie.numberOfFrames , framenumber )
