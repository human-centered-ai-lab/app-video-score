# -*- coding: utf-8 -*-
"""

MovieService class - This class holds the method related to User manipulations.

"""

from server.app.models.tag import Tag
from server.app.services import SQLAlchemyService
from server.app import db

class TagService(SQLAlchemyService):
    __model__ = Tag
    __db__    = db

    def __init__(self):
        # Creating a parent class ref to access parent class methods.
        self.parentClassRef = super(TagService, self),