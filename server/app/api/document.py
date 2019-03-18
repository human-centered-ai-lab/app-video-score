# -*- coding: utf-8 -*-
"""User Route for Demo application."""
from flask import Blueprint
from flask import Flask, request, jsonify, url_for, send_file

from server.app.api import api
from server.app.models.document import  Document
from server.app.models.content_element import  ContentElement
from server.app.services.document_service import DocumentService

document_service = DocumentService()
staticFN = 0

@api.route("/documents")
def get_documents():
    d = document_service.allasdict()
    for item in d:
      del item['contentIndex'] 
    return jsonify(d)


@api.route("/document/<int:id>")
def get_document(id):

     d = document_service.get(id)
     cedb = d.contentElements
     content_elements = {}
     for c in cedb:
          element = {'id':c.contentType, 'payload':c.content}
          content_elements.update ( {c.uuid:element } )
     
     document = {
          'name' : d.name,
          "content_element_index" :  d.contentIndex,
          'content_elements'  : content_elements
     }
     return (jsonify(document))
