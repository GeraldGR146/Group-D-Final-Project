from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from app.models import db, Wishlist, Product, User

wishlist_routes = Blueprint('wishlist_routes', __name__)

@wishlist_routes.route('/wishlist', methods=['POST'])
@jwt_required()
def add_to_wishlist():
    current_user = get_jwt_identity()
    product_id = request.json.get('product_id')

    if not product_id:
        return jsonify({'message': 'Missing product_id'}), 400

    if Product.query.get(product_id) is None:
        return jsonify({'message': 'Product not found'}), 404

    existing_wishlist_item = Wishlist.query.filter_by(
        consumer_id=current_user['user_id'],
        product_id=product_id
    ).first()

    if existing_wishlist_item:
        return jsonify({'message': 'Product already in wishlist'}), 400

    new_wishlist_item = Wishlist(
        consumer_id=current_user['user_id'],
        product_id=int(product_id)
    )

    try:
        db.session.add(new_wishlist_item)
        db.session.commit()
        return jsonify({'message': 'Product added to wishlist'}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({'message': str(e)}), 500

@wishlist_routes.route('/wishlist', methods=['GET'])
@jwt_required()
def get_wishlist():
    current_user = get_jwt_identity()

    wishlist_items = Wishlist.query.filter_by(consumer_id=current_user['user_id']).all()

    result = []
    for item in wishlist_items:
        product = Product.query.get(item.product_id)
        result.append({
            'wishlist_id': item.wishlist_id,
            'product_id': item.product_id,
            'product_name': product.name if product else 'Unknown Product',
            'created_at': item.created_at
        })

    return jsonify(result), 200

@wishlist_routes.route('/wishlist/<int:wishlist_id>', methods=['DELETE'])
@jwt_required()
def remove_from_wishlist(wishlist_id):
    current_user = get_jwt_identity()

    wishlist_item = Wishlist.query.get(wishlist_id)
    if not wishlist_item:
        return jsonify({'message': 'Wishlist item not found'}), 404

    if wishlist_item.consumer_id != current_user['user_id']:
        return jsonify({'message': 'Unauthorized'}), 403

    try:
        db.session.delete(wishlist_item)
        db.session.commit()
        return jsonify({'message': 'Product removed from wishlist'}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({'message': str(e)}), 500
