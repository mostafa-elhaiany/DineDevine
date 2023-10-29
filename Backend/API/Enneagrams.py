"""
During the initial login there will be a verification step.
Users would have to take a picture to verify themselves
it would be fun if we can use this photo to identify which ennegram they are based on
how they look.

database: 
{
    "_id": 1 of the 16 enneagram types,
    "Name": every type has a name (Architect, Guardian, etc),
    "Intro": Introduction text,
    "SandW": Strengths and weaknesses,
    "RomRel": Romantic relation information,
    "Friendships": Friendship information,
    "Parenthood": Parenthood information,
    "Career": Career information,
    "Workplace": personality in the workplace information,
    "Conc": conclusion text
}

"""

from flask import Blueprint
import Database

enneagrams_page = Blueprint('enneagrams_page', __name__)


@enneagrams_page.route("/enneagrams/<id>", methods=("GET",)) 
def read(id):
    item = Database.enneagram_collection.find_one({"_id":id})
    enneagram_dict = {
            "_id": item["_id"],
            "Name": item["Name"],
            "Intro": item["Intro"],
            "SandW": item["SandW"],
            "RomRel": item["RomRel"],
            "Friendships": item["Friendships"],
            "Parenthood": item["Parenthood"],
            "Career": item["Career"],
            "Workplace": item["Workplace"],
            "Conc": item["Conc"]
        }
    return  enneagram_dict


def get_feature_vector(image):
    '''
    returns the feature vector of the image uploaded
    '''
    #TODO
    pass


@enneagrams_page.route("/enneagrams/", methods=("GET",))
def return_ennegram_based_on_looks():
    '''
    Runs Kmeans clustering in 
    '''
    return {}
