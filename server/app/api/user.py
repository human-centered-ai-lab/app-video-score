# -*- coding: utf-8 -*-
"""User Route for Demo application."""

from flask import Blueprint

from server.app.services.user_service import UserService
from server.app.api import api

user_service = UserService()

@api.route("/api/users")
def  get_users():
    users = user_service.all()
    return users

@api.route("/api/user/<int:id>")
def get_user(id):
    user = user_service.get(id)
    return user
