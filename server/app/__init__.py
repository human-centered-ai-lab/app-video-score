# -*- coding: utf-8 -*-
"""Angular-Flask-Docker-Skeleton

    Main application package

"""
import logging

from flask import Flask
from flask_bootstrap import Bootstrap

from flask_sqlalchemy import SQLAlchemy
from flask_sse import sse

from celery import Celery
from celery.signals import after_setup_logger

from server.settings import config, Config

from flask_cors import CORS
from flask_socketio import SocketIO


bootstrap = Bootstrap()
db = SQLAlchemy()
app_celerey = Celery(__name__, broker=Config.CELERY_BROKER_URL)
socketio = SocketIO()

def create_app(config_name):

    app = Flask(__name__)

    cors = CORS(app, resources={r"/*": {"origins": "*"}})

    app.config.from_object(config[config_name])
    bootstrap.init_app(app)
    db.init_app(app)
    db.app = app
    app_celerey.conf.update(app.config)

    TaskBase = app_celerey.Task
    class ContextTask(TaskBase):
        abstract = True
        def __call__(self, *args, **kwargs):
            with app.app_context():
                return TaskBase.__call__(self, *args, **kwargs)

    app_celerey.Task = ContextTask

    logger = logging.getLogger(__name__)

    @after_setup_logger.connect
    def setup_loggers(logger, *args, **kwargs):
        formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')

        # SysLogHandler
        slh = logging.handlers.SysLogHandler(address=('logsN.papertrailapp.com', '...'))
        slh.setFormatter(formatter)
        logger.addHandler(slh)

    from server.app.api import api as api_1_0_blueprint
    app.register_blueprint(api_1_0_blueprint, url_prefix='/api')
    app.register_blueprint(sse, url_prefix='/stream')

    socketio.init_app(app)

    return socketio, app
