from flask import Flask
from mysql_connector import init_db
from dotenv import load_dotenv
from app.routes import register_routes

# Load environment variables from .env file
load_dotenv()

def create_app():
    app = Flask(__name__)
    
    # Initialize the database and other components
    init_db(app)

    # Register all routes
    register_routes(app)

    return app

if __name__ == "__main__":
    app = create_app()
    app.run(debug=True)
