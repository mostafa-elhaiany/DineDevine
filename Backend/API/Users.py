"""
Handles the CRUD rules for Users in the databases

database: 
{
    name: "user name",
    email: "user email",
    "phone number: "", --optional
    "ennegram": (one of the 16 personality types)
    "prefrences/tags": list of tags or preferences per user, (also used to match people)
    "looking": True/False, if a user is looking to be matched with someone or not 
    "profile_pic": image
    "face_vector": [v1,v2......v2048], #face recognition  
    "vector": ([v1,v2,......,v60] feature vector of person's personality question)
    "answered": [a1,a2.......,a60] true or false to explain if the user ever answered the personality question vi
}

"""
from flask import Blueprint, request, jsonify
from bson.objectid import ObjectId
import Database
from FaceRec.image2enneagramm import image2enneagramm
#FacialRecognition.image2enneagramm import image2enneagramm

users_page = Blueprint('users_page', __name__)

@users_page.route("/users/", methods=("POST",)) 
def create():
    name  = request.json["name"]    
    email = request.json["email"]

    
    profile_pic_64 = request.json["image"]
    try:
        ennegram = image2enneagramm(profile_pic_64)
    except:
        ennegram = "INFJ"    
    
    ennegram = request.json["ennegram"] if "ennegram" in request.json or "enneagram" in request.json else None

    ID = str(ObjectId())

    user_dict = {
        "ID": ID,
        "name": name,
        "email": email,
        "ennegram": ennegram,
        "tags": [],
        "looking": False,
        "profile_pic": profile_pic_64,
        "vector": [0 for _ in range(60)],
        "answered": [False for _ in range(60)]
    }
    Database.user_collection.insert_one(user_dict)

    return {"ID":ID}


@users_page.route("/users/all", methods=("GET",)) 
def read_all():
    users = Database.user_collection.find()
    user_list = []
    for item in users:
        user_dict = {
            "ID": str(item["ID"]),
            "name": item["name"],
            "email": item["email"],
            "ennegram": item["ennegram"],
            "tags": item["tags"],
            "looking": item["looking"],
            "profile_pic": item["profile_pic"],
            "vector": item["vector"],
            "answered": item["answered"]
        }
        user_list.append(user_dict)
    return jsonify(user_list)

@users_page.route("/users/<id>", methods=("GET",)) 
def read(id):
    item = Database.user_collection.find_one({"ID":id})
    user_dict = {
            "ID": str(item["ID"]),
            "name": item["name"],
            "email": item["email"],
            "ennegram": item["ennegram"],
            "tags": item["tags"],
            "looking": item["looking"],
            "profile_pic": item["profile_pic"],
            "vector": item["vector"],
            "answered": item["answered"]
        }
    return  user_dict

@users_page.route("/users/<id>", methods=("POST",)) 
def update(id):
    original_user = Database.user_collection.find_one({"ID":id})

    name = request.json["name"] if "name" in request.json else original_user["name"]
    email = request.json["email"] if "email" in request.json else original_user["email"]
    pic = request.json["image"] if "image" in request.json else original_user["image"]
    tags = request.json["tags"] if "tags" in request.json else original_user["tags"]
    looking = request.json["looking"] if "looking" in request.json else original_user["looking"]
    vector = request.json["vector"] if "vector" in request.json else original_user["vector"]
    answered = request.json["answered"] if "answered" in request.json else original_user["answered"]

    user_dict = {
            "name": name,
            "email": email,
            "profile_pic": pic,
            "tags": tags,
            "looking": looking,
            "vector": vector,
            "answered": answered
        }    
    
    Database.user_collection.update_one({'ID': id}, {'$set': user_dict})

    return {"ID":id}

    
@users_page.route("/users/<id>", methods=("DELETE",)) 
def delete(id):
    Database.user_collection.delete_many({'ID': id})
    return {"status":200}


