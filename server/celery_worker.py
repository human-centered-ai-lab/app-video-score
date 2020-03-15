#!/usr/bin/env python3
import os
from server.app import app_celerey, create_app
from flask.logging import default_handler

app = create_app(os.getenv('FLASK_CONFIG') or 'default')
app.app_context().push()

#socketio, app = create_app(os.getenv('FLASK_CONFIG') or 'default')
