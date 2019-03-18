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



class Tag (BaseModel, db.Model):
    """Model for movies table"""
    __tablename__ = "frametag"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True, nullable=False)
    movieID = db.Column(db.Integer, db.ForeignKey('movies.id'),  nullable=True)
    fn   = db.Column(db.Integer, nullable=True)
    tag =  db.Column(db.String(16), nullable=True)

    def __init__(self, movieID, fn, tag):
        super().__init__()
        self.movieID = movieID
        self.fn = fn
        self.tag = tag

