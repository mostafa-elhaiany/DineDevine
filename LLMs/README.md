# DineDevine LLMs
This folder is responsible for connecting and quering chatGPT

### Install Libraries
Make sure to install the required libraries using  pip3 install -r requirements.txt

### API key
Make sure to add openAi api key inside .key file


### Usage
#### icebreakers
user1_tags = ['Poetry', 'Netflix', 'Sightseeing']
user2_tags = ['Travelling', 'IceCream']
get_icebreaker(user1_tags, user2_tags)
>> <output>: [What is your favorite type of poetry? What is your favorite show on Netflix? What is the most memorable place you've been sightseeing? Where is your favorite place you've travelled to? What is your favorite flavor of ice cream?]

#### Simulate Lunch Break
user1_personality_id = "INTJ"
user1_personality_name = "Architect"
user1_tags =  [ "School", "cooking", "gaming", "night clubs"]
user1_personality_intro = "An Architect (INTJ) is an individual with a unique personality marked by introversion, intuition, thinking, and judging traits."
user1 = (user1_personality_id, user1_personality_name, user1_tags, user1_personality_intro)
user2_personality_id = "INTP" 
user2_personality_name = "Logician"
user2_tags =  [ "Fishing", "Housework", "Praying"]
user2_personality_intro = "A Logician (INTP) is characterized by Introverted, Intuitive, Thinking, and Prospecting personality traits, making them flexible thinkers who enjoy unconventional approaches to life."
user2 = (user2_personality_id, user2_personality_name, user2_tags, user2_personality_intro)
icebreakers = ["What kind of Music genre do you prefer listening to?","How long did it take you to learn programming?","What is the easiest dance move that you could teach me? What sports do you often play?"]
lunch_break_simulation(user1,user2,icebreakers,tmp=0.2)
>> True
