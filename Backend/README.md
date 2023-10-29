# DineDevine backends

## User Api
The user database looks like the following:
```
{
    "ID": "Unique ID"
    "name": "user name",
    "email": "user email",
    "ennegram": (4 letter string containing one of the 16 personality types)
    "tags": list of tags or preferences per user, (also used to match people)
    "looking": True/False, if a user is looking to be matched with someone or not 
    "profile_pic": "base64 string image"
    "vector": ([v1,v2,......,v60] feature vector of person's personality question)
    "answered": [a1,a2.......,a60] true or false to explain if the user ever answered the personality question vi
}

```

You can use the following requests 

### Create
```
(route="/users/", methods=("POST",)) 

returns: {"ID":ID}
```

### Read

```
(route="/users/all", methods=("GET",)) 

returns: list of all users
```

```
(route="/users/<id>", methods=("GET",)) 

returns: information of user with ID
```

### Update

```
(route="/users/<id>", methods=("POST",)) 

request body needs to have a json with user info
```

### Delete
```
(route="/users/<id>", methods=("DELETE",)) 

deletes user with this id 
```

## Enneagram API

The Enneagram database looks like the following:
```
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

```

### Read

```
(route="/enneagram/<id>", methods=("GET",)) 

Returns information about the enneagram with id
```


## Matching API
API for creating the matching system, offers an API to create a 2 people match (generizeable to n people groups) as well as ice breakers

### Match Creation

```
("/matches/<id>",methods=("GET",))

Returns     compatibilities = {
        "1":[id1, id2, ....], # best
        "2":[id1, id2, ....],
        "3":[id1, id2, ....],
        "4":[id1, id2, ....], 
        "5":[id1, id2, ....], # worse
    }
not necessarily all filled 
```

### Ice Breaker Generation

```
("/matches/icebreaker/<id1>/<id2>",methods=("GET",))

Returns     questions = ["question1", "question2", ...]
```
