from flask import Flask
from flask_cors import CORS
from mysql_connector import init_db
from dotenv import load_dotenv
from app.routes import register_routes

# Load environment variables from .env file
load_dotenv()

def create_app():
    app = Flask(__name__)

    CORS(app)
    
    # Initialize the database and other components
    init_db(app)
    register_routes(app)

    return app

if __name__ == "__main__":
    app = create_app()
    app.run(debug=True)