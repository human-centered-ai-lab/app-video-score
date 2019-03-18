# -*- coding: utf-8 -*-
"""server.api

    server blueprints/blueprints application package

"""

from flask import Blueprint

api = Blueprint('api', __name__)

from server.app.api import default, movie, user, task, document
