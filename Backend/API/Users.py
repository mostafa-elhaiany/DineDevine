from flask import Blueprint

users_page = Blueprint('users_page', __name__)

@users_page.route("/users/<id>") 
def get(id):
    return id
