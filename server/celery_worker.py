#!/usr/bin/env python3
import os
from server.app import app_celerey, create_app
from flask.logging import default_handler

socketio, app = create_app(os.getenv('FLASK_CONFIG') or 'default')
