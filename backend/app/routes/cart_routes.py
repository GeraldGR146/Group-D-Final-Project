from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from app.models import Cart, CartItem
from mysql_connector import get_session

cart_bp = Blueprint('cart_bp', __name__)

def get_user_cart(session, user_id):
    cart = session.query(Cart).filter_by(consumer_id=user_id).first()
    if not cart:
        # create a new cart for the user if none exists
        cart = Cart(cart_id=Cart.create_unique_cart_id(session), consumer_id=user_id)
        session.add(cart)
        session.commit()
    return cart

# Add Item to Cart
@cart_bp.route('/cart/item', methods=['POST'])
@jwt_required()
def add_item_to_cart():
    session = get_session()
    current_user = get_jwt_identity()
    user_id = current_user['user_id']
    
    cart = get_user_cart(session, user_id)
    
    product_id = request.form.get('product_id')
    quantity = int(request.form.get('quantity'))
    
    # Check if the product already exists in the cart
    existing_item = session.query(CartItem).filter_by(cart_id=cart.cart_id, product_id=product_id).first()
    
    if existing_item:
        # Update quantity if item already exists
        existing_item.quantity += quantity
        session.commit()
        return jsonify(existing_item.to_dict()), 200
    
    # Add new cart item if it doesn't exist
    cart_item_id = CartItem.create_unique_cart_item_id(session)
    cart_item = CartItem(
        cart_item_id=cart_item_id,
        cart_id=cart.cart_id,
        product_id=product_id,
        quantity=quantity
    )
    session.add(cart_item)
    session.commit()
    
    return jsonify(cart_item.to_dict()), 201

# Update Cart Item
@cart_bp.route('/cart/item', methods=['PUT'])
@jwt_required()
def update_cart_item():
    session = get_session()
    current_user = get_jwt_identity()
    user_id = current_user['user_id']
    
    cart = get_user_cart(session, user_id)
    
    cart_item_id = request.form.get('cart_item_id')
    quantity = int(request.form.get('quantity'))
    
    # If cart_item_id is not provided, get the first item in the cart
    if not cart_item_id:
        cart_item = session.query(CartItem).filter_by(cart_id=cart.cart_id).first()
        if not cart_item:
            return jsonify({"message": "No items in cart to update"}), 404
        cart_item_id = cart_item.cart_item_id
    
    # Update the specific cart item
    cart_item = session.query(CartItem).filter_by(cart_item_id=cart_item_id, cart_id=cart.cart_id).first()
    if not cart_item:
        return jsonify({"message": "Cart item not found"}), 404
    
    cart_item.quantity = quantity
    session.commit()
    
    return jsonify(cart_item.to_dict()), 200

# Delete Cart Item
@cart_bp.route('/cart/item', methods=['DELETE'])
@jwt_required()
def delete_cart_item():
    session = get_session()
    current_user = get_jwt_identity()
    user_id = current_user['user_id']
    
    cart = get_user_cart(session, user_id)
    
    cart_item_id = request.form.get('cart_item_id')
    
    # If cart_item_id is not provided, get the first item in the cart
    if not cart_item_id:
        cart_item = session.query(CartItem).filter_by(cart_id=cart.cart_id).first()
        if not cart_item:
            return jsonify({"message": "No items in cart to delete"}), 404
        cart_item_id = cart_item.cart_item_id
    
    # Delete the specific cart item
    cart_item = session.query(CartItem).filter_by(cart_item_id=cart_item_id, cart_id=cart.cart_id).first()
    if not cart_item:
        return jsonify({"message": "Cart item not found"}), 404
    
    session.delete(cart_item)
    session.commit()
    
    return jsonify({"message": "Cart item deleted"}), 200

# Delete All Cart Items
@cart_bp.route('/cart/items', methods=['DELETE'])
@jwt_required()
def delete_all_cart_items():
    session = get_session()
    current_user = get_jwt_identity()
    user_id = current_user['user_id']
    
    cart = get_user_cart(session, user_id)
    
    # Delete all items in the user's cart
    items = session.query(CartItem).filter_by(cart_id=cart.cart_id).all()
    if not items:
        return jsonify({"message": "No items in cart to delete"}), 404
    
    for item in items:
        session.delete(item)
    session.commit()
    
    return jsonify({"message": "All cart items deleted"}), 200

# Get Cart Items
@cart_bp.route('/cart/item', methods=['GET'])
@jwt_required()
def get_cart_items():
    session = get_session()
    current_user = get_jwt_identity()
    user_id = current_user['user_id']
    
    cart = get_user_cart(session, user_id)
    
    # Check if the cart is empty
    items = session.query(CartItem).filter_by(cart_id=cart.cart_id).all()
    if not items:
        return jsonify({"message": "Cart is empty"}), 200
    
    return jsonify([item.to_dict() for item in items]), 200
