import os
from dotenv import load_dotenv, find_dotenv

load_dotenv(find_dotenv())

MONGO_USERNAME=os.environ.get("MONGO_USERNAME")
MONGO_PASSWORD=os.environ.get("MONGO_PASSWORD")
MONGO_URI=os.environ.get('MONGO_URI')
