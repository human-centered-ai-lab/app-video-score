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


class Document(BaseModel, db.Model):
    """Model for documents table"""
    __tablename__ = "document"

    id     = db.Column(db.Integer, primary_key=True, autoincrement=True)
    uuid   = db.Column(db.String(128), nullable=True)
    name   = db.Column(db.String(128), nullable=False)
    contentIndex   = db.Column(db.String(), nullable=False)

    contentElements = db.relationship('ContentElement', backref='document', lazy=True)

    def __init__(self, uuid, name="Document", contentIndex="", contentElements=[]):
        super().__init__()
        self.uuid = uuid
        self.name = name
        self.contentIndex = contentIndex
        self.contentElements = contentElements
