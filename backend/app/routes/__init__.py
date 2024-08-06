from flask import Blueprint

# Import the blueprints
from app.routes.user_routes import user_bp
from app.routes.store_routes import store_bp
from app.routes.product_routes import product_bp
from app.routes.order_routes import order_bp
from app.routes.promotion_routes import promotion_bp
from app.routes.review_routes import review_bp
from app.routes.transaction_routes import transaction_bp

def register_routes(app):
    # Register blueprints
    app.register_blueprint(user_bp)
    app.register_blueprint(store_bp)
    app.register_blueprint(product_bp)
    app.register_blueprint(order_bp)
    app.register_blueprint(promotion_bp)
    app.register_blueprint(review_bp)
    app.register_blueprint(transaction_bp)
