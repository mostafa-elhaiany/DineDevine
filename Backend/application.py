from flask import Flask
from flask_cors import CORS
#API pages
from API.Users import users_page
from API.Enneagrams import enneagrams_page
from API.Match import matches_page


app = Flask(__name__)
app.register_blueprint(users_page)
app.register_blueprint(enneagrams_page)
app.register_blueprint(matches_page)

CORS(app)

@app.route("/") 
def home():
	return "Hello, world!"

if __name__ == "__main__":
    app.run()
