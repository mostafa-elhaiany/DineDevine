'''
File that handles all interactions with the DB
'''
import pymongo
from pymongo import MongoClient
import config

cluster = MongoClient(config.MONGO_URI)
db = cluster['DineDevine']

user_collection = db["Users"]