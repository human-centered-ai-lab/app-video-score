# -*- coding: utf-8 -*-
"""User Route for Demo application."""

from flask import Blueprint
from flask import Flask, request, jsonify


route = Blueprint('command', __name__)

@route.route("/api/movie/command",methods = ['POST', 'GET'])
def execute_command():
    content = request.json
    print (content)
    return content

@app.route('/hello')
def publish_hello():
    sse.publish({"message": "Hello!"}, type='greeting')
    return "Message sent!"