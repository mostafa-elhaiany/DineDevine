'''
File that handles all interactions with the DB
'''
from pymongo import MongoClient
import config

cluster = MongoClient(config.MONGO_URI)
db = cluster['DineDevie'] # unfortunatly this is not a typo

user_collection = db["Users"]
enneagram_collection = db["Enneagram"]
compatibilities_collection = db["Compatibility"]
