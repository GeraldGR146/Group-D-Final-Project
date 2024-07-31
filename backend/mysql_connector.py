from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from datetime import timedelta
import os

# Initialize SQLAlchemy, Bcrypt, and JWT instances
db = SQLAlchemy()
bcrypt = Bcrypt()
jwt = JWTManager()

def init_db(app):
    app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')
    app.config['JWT_SECRET_KEY'] = os.getenv('JWT_SECRET_KEY') 
    app.config['PERMANENT_SESSION_LIFETIME'] = timedelta(minutes=30)
    app.config['SQLALCHEMY_DATABASE_URI'] = (
        f"mysql+mysqlconnector://{os.getenv('DB_USERNAME')}:{os.getenv('DB_PASSWORD')}@{os.getenv('DB_HOST')}/{os.getenv('DB_DATABASE')}"
    )
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    
    try:
        db.init_app(app)
        bcrypt.init_app(app)
        jwt.init_app(app)
        print("Success connecting to MySQL Database")
    except Exception as e:
        print(f"Error connecting to MySQL Database: {e}")
    
    with app.app_context():
        db.create_all()

def get_session():
    database_uri = (
        f"mysql+mysqlconnector://{os.getenv('DB_USERNAME')}:{os.getenv('DB_PASSWORD')}@{os.getenv('DB_HOST')}/{os.getenv('DB_DATABASE')}"
    )
    engine = create_engine(database_uri)
    Session = sessionmaker(bind=engine)
    return Session()
