import openai
import os

def query(msg, model_name='gpt-3.5-turbo', tmp=0.2):
    #print('waiting for a responce')
    try:
        response = openai.ChatCompletion.create(
            model=model_name,
            messages=msg,
            temperature=tmp,
        )
        return response.choices[0].message.content
    except openai.error as e:
        #print(f"{e}")
        return ""
    

def get_icebreaker(user1_tags, user2_tags, model_name='gpt-4', tmp=0.2):
  tags1 = ','.join(user1_tags)
  tags2 = ','.join(user2_tags)
  gptPrompt = f"Your task is to create a list of Ice breaker questions, given two lists of interests. \
Sample input and output is provided below, you have to answer in a consistent style: \
<input>: [Football, Music, Dancing] [Poetry, Singing, Programming] \
<output>: What kind of Music genre do you prefer listening to? How long did it take you to learn programming? What is the easiest dance move that you could teach me? What sports do you often play? \
\
Generate the corresponding icebreaker questions for this input: \
<input>: [{tags1}] [{tags2}]"

  msg = [{"role": "user", "content": f"{gptPrompt}"}]
  openai.api_key = os.environ["openai_api"]
  return query(msg, model_name, tmp)[:10].split("?")


def lunch_break_simulation(user1, user2, icebreakers, model_name='gpt-4', tmp=0.2):
  user1_personality_id, user1_personality_name, user1_tags, user1_personality_intro = user1
  user2_personality_id, user2_personality_name, user2_tags, user2_personality_intro = user2
  tags1 = ','.join(user1_tags)
  tags2 = ','.join(user2_tags)
  gptPrompt = f"Given person A and person B with personality types {user1_personality_id} {user1_personality_name} and {user2_personality_id} {user2_personality_name}.\
Here is some information about person A and person B:\
Person A: likes {tags1}\
Person B: likes {tags2}\
Here is some information about the two personality types:\
INTJ Architect:{user1_personality_intro}\
INTP Logician:{user2_personality_intro}\
\
Given a list of icebreakers, would they have a fruitful Lunch break?\
Icebreakers: {icebreakers}\
Answer with only Yes or No "

  msg = [{"role": "user", "content": f"{gptPrompt}"}]
  openai.api_key = os.environ["openai_api"]
  res = query(msg, model_name, tmp)

  if res.lower() == "yes":
    return True
  return False

