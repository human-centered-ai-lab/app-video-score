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

from flask import Blueprint
from flask import Flask, request, jsonify, url_for, send_file
from time import sleep
import random
from celery import Celery

from server.app.api import api
#from server.app     import socketio

from server.app.celerytasks.tasks  import analyzeMovieSync
from server.app.services.movie_utils import stripeBaseDirectory, keframeBaseDirectory, keyFrameName, stripeFileName, stripeStaticURL, movieCacheDirectory, movieFileName

from flask_sse import sse

#from flask_socketio import send, emit

from server.app import db
from server.app.models.movie import Movie
from server.app.models.tag import   Tag
from server.app.models.document import  Document
from server.app.models.content_element import  ContentElement

from server.app.services.movie_service import MovieService
from server.app.services.document_service import DocumentService

from server.app.celerytasks.document_generator import generateDocumentAndCaches

movie_service = MovieService()
document_service = DocumentService()
staticFN = 0


@api.route("/movies")
def get_movies():
    movies = movie_service.all()
    return movies

@api.route("/movie/<int:id>")
def get_movie(id):
    movie = movie_service.get(id)
    return jsonify(movie.as_dict() )

@api.route("/movie/<int:id>/command", methods = ['POST', 'GET'])
def execute_command (id):
     content = request.json
     print("execute the command ", content)
     analyzeMovieSync (id, content)
     return jsonify({}, 400, {'Location': "http://0.0.0.0:8077/api/movie/commandstatus" })

@api.route("/movie/<int:id>/stripe/<int:sid>")
def get_stripe_url (id, sid):
     movie = movie_service.get(id)
     # TODO check if sid is in range
     stripe = {'url': stripeStaticURL(movie, sid)}
     return jsonify(stripe)

@api.route("/movie/<int:id>/stripes")
def get_stripe_urls (id):
     movie = movie_service.get(id)
     # TODO check if sid is in range
     urls = []
     for i in range(0, movie.numberOfStripes):
         stripe = {'url': stripeStaticURL (movie, i)}
         urls.append (stripe)
     return jsonify(urls)

@api.route("/movie/<int:id>/frame/<int:fn>")
def get_frame(id,fn):
     movie = movie_service.get(id)

     if (movie.source  == "YOUTUBE"):
        vPafy = pafy.new(movie.uri)
        play = vPafy.getbest()
        cap = cv2.VideoCapture(play.url)

     if (movie.source  == "FILESYSTEM"):
        localdirname = os.path.dirname("/data/movies/") 
        filename = os.path.join(localdirname, movie.uri)   
        cap = cv2.VideoCapture(filename)

     kfd = keframeBaseDirectory(movie)

     if  not os.path.exists(kfd):
        os.makedirs(kfd)

     fullfilename =  keyFrameName (movie, fn, "big")  
     if os.path.exists(fullfilename):
           with open(fullfilename, 'rb') as cachedfile:
               return send_file(
                     io.BytesIO(cachedfile.read()),
                     attachment_filename='f.jpeg',
                     mimetype='image/jpg'
               )
     else:     
          cap.set(cv2.CAP_PROP_POS_FRAMES, fn)
          success, image = cap.read()
          ratio = 1.0 * movie.height / movie.width
          SMALLIMAGEWITH = 200
          SMALLIMAGEHEIGHT = int (SMALLIMAGEWITH * ratio)
          imgsmall = cv2.resize(image, (SMALLIMAGEWITH, SMALLIMAGEHEIGHT))
          cv2.imwrite(fullfilename,  imgsmall)
          success, imgtosend = cv2.imencode('.jpg', imgsmall)
          return send_file(
                     io.BytesIO(imgtosend),
                     attachment_filename='f.jpeg',
                     mimetype='image/jpg'
               )


@api.route("/movie/<int:id>/cuts")
def get_cuts(id):
     movie = movie_service.get(id)
     cuts = movie.tags
     cd = [x.as_dict() for x in cuts]
#     print (cd )
     sortetcuts = sorted(cd, key=lambda k: k['fn']) 
 #    print (sortetcuts )
     return jsonify(sortetcuts)


@api.route("/movie/<int:id>/setparams")
def setparams(id):
     movie = movie_service.get(id)

     if (movie.source  == "YOUTUBE"):
        vPafy = pafy.new(movie.uri)
        play = vPafy.getbest()
        cap = cv2.VideoCapture(play.url)

     if (movie.source  == "FILESYSTEM"):
        localdirname = os.path.dirname("/data/movies/") 
        filename = os.path.join(localdirname, movie.uri)   
        cap = cv2.VideoCapture(filename)

     movie.numberOfFrames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
     movie.width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
     movie.height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
     movie.fps = cap.get(cv2.CAP_PROP_FPS)

     db.session.commit()
     return jsonify(movie.as_dict() )


@api.route("/movie/<int:id>/generateDocumentAndCaches")
def test_tom(id):
    d = generateDocumentAndCaches (id) 
    return jsonify(d.as_dict()) 

@api.route('/movie/syncmovie')
def publish_hello():
    sse.publish(  type='greeting',
                  data=
                  { 'storeID':'MOVIE', 
                    'operation':'UPDATE',
                    'payload' : { 'id': 2, 'changes':{'name':'HEIMO'} }
                  }
                  ); 


#    send ('TEST', broadcast=True, namespace='/') 
    print (url_for("sse.stream", channel="users.social"))
    return "Message sent!"

'''
@socketio.on('connect', namespace='/chat')
def test_connect():
    print ('WEBSOCKETS CONNECTED')
    emit('my response', {'data': 'Connected'})
'''