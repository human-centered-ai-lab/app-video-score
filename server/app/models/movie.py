# -*- coding: utf-8 -*-

from sqlalchemy import inspect
from server.app import db
from sqlalchemy.sql import func


class BaseModel(db.Model):
    """Base data model for all objects"""
    __abstract__ = True

    def __init__(self, *args):
        super().__init__(*args)

    def __repr__(self):
        """Define a base way to print models"""
        return '%s(%s)' % (self.__class__.__name__, {
            column: value
            for column, value in self.as_dict().items()
        })

    # def _as_dict(self):
    #     return {c.name: getattr(self, c.name) for c in self.__table__.columns}

    # Preferred way
    # https://stackoverflow.com/questions/1958219/convert-sqlalchemy-row-object-to-python-dict
    def as_dict(self):
        return {c.key: getattr(self, c.key)
                for c in inspect(self).mapper.column_attrs}


class Movie(BaseModel, db.Model):
    """Model for movies table"""
    __tablename__ = "movies"

    id     = db.Column(db.Integer, primary_key=True, autoincrement=True)
    uuid   = db.Column(db.String(128), nullable=True)
    name   = db.Column(db.String(128), nullable=False)
    source = db.Column(db.String(128), nullable=False)
    uri    = db.Column(db.String(128), nullable=False)
    width     = db.Column(db.Integer, nullable=True)
    height    = db.Column(db.Integer, nullable=True)
    numberOfFrames  = db.Column(db.Integer, nullable=True)
    fps   = db.Column(db.Float(), default=0.0, nullable=True)
    stripeStatus   = db.Column(db.Float(), default=0.0, nullable=True)
    cutStatus   = db.Column(db.Float(), default=0.0, nullable=True)
    docStatus   = db.Column(db.Float(), default=0.0, nullable=True)
    hasStripeImage = db.Column(db.Boolean(), default=False, nullable=False)
    numberOfStripes  = db.Column(db.Integer(), default=0, nullable=False)

    active = db.Column(db.Boolean(), default=True, nullable=False)

    tags = db.relationship('Tag', backref='movies', lazy=True)


    def __init__(self, uuid="", name="", source="", uri="", numberOfFrames= 0, active=False, width=-1, height=-1, stripeStatus=0.0, cutStatus=0.0, docStatus=0.0, fps=25, numberOfStripes=0, tags=[]):
        super().__init__()
        self.uuid = uuid
        self.name = name
        self.source = source
        self.uri = uri
        self.active = active
        self.width = width
        self.height = height
        self.numberOfFrames = numberOfFrames
        self.fps = fps
        self.stripeStatus = stripeStatus
        self.cutStatus = cutStatus
        self.docStatus = docStatus
        self.numberOfStripes = numberOfStripes
        self.tags = tags
