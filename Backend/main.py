from flask import Flask

#API pages
from API.Users import users_page

app = Flask(__name__)
app.register_blueprint(users_page)

@app.route("/") 
def home():
	return "Hello, world!"

if __name__ == "__main__":
    app.run(port=3000)
