# -*- coding: utf-8 -*-
"""Default api blueprints for Demo application."""

from flask import jsonify

from server.app.api import api

@api.route("/")
def hello():
    return "Hello from Flask using Python 3.6.2!!"

@api.route("/ping")
def ping():
    return jsonify({"status": 200, "msg":"Hallo Heimo -  message is coming from Flask backend!"})
