'''
Handles all API calls to match people together.
Use by calling the api with a list of people that you wanna match someone to 
The api will look through the database of people who want to be matched for lunch 
and return the new added person 
'''

from flask import Blueprint
from Database import user_collection, compatibilities_collection
from LLMs.chatGPT import get_icebreaker

matches_page = Blueprint('matches_page', __name__)


@matches_page.route("/matches/<id>",methods=("GET",))
def get_match(id):
    #TODO get user 
    item = user_collection.find_one({"ID":id})
    user_dict = {
            "ID": item["ID"],
            "name": item["name"],
            "email": item["email"],
            "ennegram": item["ennegram"],
            "tags": item["tags"],
            "vector": item["vector"],
            "answered": item["answered"]
        }
    
    all_users = user_collection.find()
    compatibilities = {
        "1":[], # best
        "2":[],
        "3":[],
        "4":[], 
        "5":[], # worse
        
    }
    for item in all_users:
        if(user_dict["ID"]==item["ID"]):
            continue

        compatibility_item = compatibilities_collection.find_one({"_id":user_dict["ennegram"]})
        
        compatibilities[compatibility_item[item["ennegram"]]].append(item["ID"])

    for key in compatibilities:
        compatibilities[key] = compatibilities[key][:5] 
    return compatibilities
        

@matches_page.route("/matches/icebreaker/<id1>/<id2>",methods=("GET",))
def generate_icebreakers(id1, id2):
    tags_1 = user_collection.find_one({"ID":id1})["tags"]
    tags_2 = user_collection.find_one({"ID":id2})["tags"]

    return  get_icebreaker(tags_1,tags_2)
