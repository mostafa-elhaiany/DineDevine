import base64
from bson.objectid import ObjectId
from Database import user_collection

users = user_collection.find()
for item in users:
    user_collection.delete_many({'ID': item["ID"]})


with open("FaceRec/Data/ESTJ/gordon_ramsay.png", "rb") as image_file:
    encoded_string = base64.b64encode(image_file.read())
    user_collection.insert_one({
        "ID": str(ObjectId()),
        "name": "Gordon Ramsy",
        "email": "Gordon@ramsy.com",
        "ennegram": "ESTJ",
        "tags": ["Cooking"],
        "looking": False,
        "profile_pic": str(encoded_string),
        "vector": [3,2,-2,0,1,-1,2,-1,1,1,3,-1,2,0,-1,2,0,-2,2,2,1,2,1,1,0,-1,0,1,2,-1,-2,-2,-3,0,-3,0,0,1,3,-2,0,-3,2,-3,-2,-2,3,0,-3,2,2,0,-1,-2,0,1,-1,1,-2,2],
        "answered": [True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True]
    })
with open("FaceRec/Data/ENTJ/steve_jobs.png", "rb") as image_file:
    encoded_string = base64.b64encode(image_file.read())
    user_collection.insert_one({
        "ID": str(ObjectId()),
        "name": "Steve Jobs",
        "email": "Steve@Jobs.com",
        "ennegram": "ENTJ",
        "tags": ["Football", "Coding"],
        "looking": False,
        "profile_pic": str(encoded_string),
        "vector": [-1,3,-3,3,-3,-3,2,-1,0,-3,0,1,-1,1,2,2,-1,3,3,2,-1,2,2,1,0,-2,-3,3,2,2,2,0,-2,0,-2,3,-3,-3,-3,2,1,3,3,-1,1,-2,2,-2,-1,-2,-2,-3,3,3,-2,1,2,-1,-3,1],
        "answered": [True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True]
    })
with open("FaceRec/Data/ESTP/frank_sinatra.png", "rb") as image_file:
    encoded_string = base64.b64encode(image_file.read())
    user_collection.insert_one({
        "ID": str(ObjectId()),
        "name": "Frank Sinatra",
        "email": "Frank@Sinatra.com",
        "ennegram": "ESTP",
        "tags": ["Singing"],
        "looking": False,
        "profile_pic": str(encoded_string),
        "vector": [-3,-3,-1,-2,0,2,-3,0,2,3,1,-1,0,1,3,3,-3,-3,-3,3,-1,-3,2,-3,0,3,1,3,2,3,3,0,3,-2,2,-1,-3,-2,1,2,-2,-3,3,2,1,-1,3,2,-3,-3,3,1,3,-2,3,-2,1,1,0,-2],
        "answered": [True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True]
    })
with open("FaceRec/Data/ISTP/bruce_lee.png", "rb") as image_file:
    encoded_string = base64.b64encode(image_file.read())
    user_collection.insert_one({
        "ID": str(ObjectId()),
        "name": "Bruce Lee",
        "email": "Bruce@Lee.com",
        "ennegram": "ISTP",
        "tags": ["KungFu", "Sports"],
        "looking": False,
        "profile_pic": str(encoded_string),
        "vector": [0,-2,-3,-3,2,1,-1,-1,2,1,0,-3,3,-1,0,-1,2,1,0,-1,2,2,-2,0,-3,-3,3,-2,-3,1,-1,-2,0,2,-1,-1,-2,2,2,2,2,-2,3,1,-2,-2,1,-3,2,3,2,-1,-3,-1,1,-2,2,-1,1,-1],
        "answered": [True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True]
    })
with open("FaceRec/Data/INTP/stephen_king.png", "rb") as image_file:
    encoded_string = base64.b64encode(image_file.read())
    user_collection.insert_one({
        "ID": str(ObjectId()),
        "name": "Steven King",
        "email": "Steven@King.com",
        "ennegram": "INTP",
        "tags": ["Books", "Reading"],
        "looking": False,
        "profile_pic": str(encoded_string),
        "vector": [-1,1,-3,-3,3,2,-3,2,0,-1,2,1,1,3,1,2,2,1,-1,0,0,-3,1,1,-3,3,-3,-1,2,0,-2,-3,3,-1,2,0,1,2,-1,0,-3,2,2,-3,2,3,1,-3,2,1,-2,-3,-3,-3,0,3,1,1,-3,1],
        "answered": [True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True]
    })
with open("FaceRec/Data/ISTJ/natalie_portman.png", "rb") as image_file:
    encoded_string = base64.b64encode(image_file.read())
    user_collection.insert_one({
        "ID": str(ObjectId()),
        "name": "Natalie Portman",
        "email": "Natalie@Portman.com",
        "ennegram": "ISTJ",
        "tags": ["acting", "Movies"],
        "looking": False,
        "profile_pic": str(encoded_string),
        "vector": [3,0,-1,-1,2,-1,1,2,-3,3,-3,2,-1,-2,3,-2,2,-2,-2,-3,1,3,3,0,0,-2,3,2,-2,3,-1,-2,0,-2,1,0,3,0,0,1,1,-2,-3,0,-3,0,-3,-3,-3,3,1,2,-3,1,-1,3,-1,-2,-1,-1],
        "answered": [True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True]
    })
with open("FaceRec/Data/INFP/mitski.png", "rb") as image_file:
    encoded_string = base64.b64encode(image_file.read())
    user_collection.insert_one({
        "ID": str(ObjectId()),
        "name": "Mitski",
        "email": "Mitski@gmail.com",
        "ennegram": "INFP",
        "tags": ["Singing", "Music"],
        "looking": False,
        "profile_pic": str(encoded_string),
        "vector": [3,0,-3,-2,-3,2,-2,2,3,-2,1,-1,0,0,1,1,-1,3,-3,-2,-2,-2,1,2,0,2,-1,-2,-3,-1,2,2,-2,1,3,-3,2,0,-3,-1,-1,3,3,-2,3,-2,-1,0,1,-1,1,-2,-3,2,-1,-3,1,-1,1,3],
        "answered": [True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True]
    })
with open("FaceRec/Data/ENFJ/emma_stone.png", "rb") as image_file:
    encoded_string = base64.b64encode(image_file.read())
    user_collection.insert_one({
        "ID": str(ObjectId()),
        "name": "Emma Stone",
        "email": "Emma@Stone.com",
        "ennegram": "ENFJ",
        "tags": ["Acting", "Movies"],
        "looking": False,
        "profile_pic": str(encoded_string),
        "vector": [-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,-3,3,-3,-3,-3,-3,-3,-3,3,3,-3,3,-3,-3,3,3,-3,3,-3,-3,3,-3,-3,3,-3,3,-3],
        "answered": [True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True]
    })
with open("FaceRec/Data/ISFP/marilyn_monroe.jpeg", "rb") as image_file:
    encoded_string = base64.b64encode(image_file.read())
    user_collection.insert_one({
        "ID": str(ObjectId()),
        "name": "Marilyn Monroe",
        "email": "Marilyn@Monroe.com",
        "ennegram": "ISFP",
        "tags": ["Singing", "Music"],
        "looking": False,
        "profile_pic": str(encoded_string),
        "vector": [1,3,1,-2,-3,-1,-2,2,1,1,-2,-3,1,-2,1,-2,-1,-2,-2,3,-2,2,-2,-2,-2,-3,-3,-1,1,-2,-3,1,0,-1,-3,3,1,3,3,-3,-2,3,-3,-2,2,0,-2,2,2,1,3,2,-2,1,-2,0,0,0,0,-2],
        "answered": [True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True]
    })
with open("FaceRec/Data/ISFJ/bob_ross.png", "rb") as image_file:
    encoded_string = base64.b64encode(image_file.read())
    user_collection.insert_one({
        "ID": str(ObjectId()),
        "name": "Bob Ross",
        "email": "Bob@Ross.com",
        "ennegram": "ISFJ",
        "tags": ["Painting", "Art"],
        "looking": False,
        "profile_pic": str(encoded_string),
        "vector": [-2,0,-1,1,-2,0,-3,-1,3,-2,2,2,-1,0,0,2,0,2,-1,3,0,-2,2,0,-2,-2,0,-1,-1,0,-3,0,0,-3,-1,-3,-3,-1,0,0,0,-3,-2,-3,-2,0,-3,2,-3,1,-2,-2,-1,1,-3,-3,-3,-1,1,-1],
        "answered": [True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True, True]
    })