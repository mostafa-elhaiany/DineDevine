'''
To be sure that two selections are a match we 
'''
from LLMs.chatGPT import lunch_break_simulation, get_icebreaker
from Database import enneagram_collection

def run_simulation(main_user, other_user):
    user1_personality_id = main_user["ennegram"]
    ennegram_1 = enneagram_collection.find_one({"_id":user1_personality_id})
    user1_personality_name = ennegram_1["Name"]
    user1_tags = main_user["tags"]
    user1_personality_intro = ennegram_1["Intro"]

    user_1 = (user1_personality_id, user1_personality_name, user1_tags, user1_personality_intro)
        
    user2_personality_id = other_user["ennegram"]
    ennegram_2 = enneagram_collection.find_one({"_id":user2_personality_id})
    user2_personality_name = ennegram_2["Name"]
    user2_tags = other_user["tags"]
    user2_personality_intro = ennegram_2["Intro"]

    user_2 = (user2_personality_id, user2_personality_name, user2_tags, user2_personality_intro)

    num_sims = 5
    num_matches = 0
    for _ in range(num_sims):
        is_match = lunch_break_simulation(user_1, user_2, get_icebreaker(user1_tags, user2_tags))
        if(is_match):
            num_matches +=1
    if(num_matches>(num_sims//2)):
        return True