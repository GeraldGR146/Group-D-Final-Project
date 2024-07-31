from flask import Blueprint

# Import the blueprints
from app.routes.user_routes import user_routes

def register_routes(app):
    # Register blueprints
    app.register_blueprint(user_routes)
