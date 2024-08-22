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

    product = Product.query.get(product_id)
    if product is None:
        return jsonify({'message': 'Product not found'}), 404

    existing_wishlist_item = Wishlist.query.filter_by(
        consumer_id=current_user['user_id'],
        product_id=product_id
    ).first()

    if existing_wishlist_item:
        return jsonify({'message': 'Product already in wishlist'}), 400

    new_wishlist_item = Wishlist(
        wishlist_id=Wishlist.generate_wishlist_id(),  # Correctly generate the wishlist_id
        consumer_id=current_user['user_id'],
        product_id=product_id
    )

    try:
        db.session.add(new_wishlist_item)
        db.session.commit()
        
        # Fetch the added product details
        product_details = {
            'product_id': product.product_id,
            'product_name': product.name,
            'product_description': product.description,
            'product_price': product.price,
            'product_quantity': product.quantity,
            'product_image_url': product.image_url
        }

        return jsonify({
            'message': 'Product added to wishlist',
            'product': product_details
        }), 201

    except Exception as e:
        db.session.rollback()
        return jsonify({'message': str(e)}), 500

@wishlist_routes.route('/wishlist', methods=['GET'])
@jwt_required()
def get_wishlist():
    current_user = get_jwt_identity()

    try:
        wishlist_items = Wishlist.query.filter_by(consumer_id=current_user['user_id']).all()

        if not wishlist_items:
            return jsonify({'message': 'Wishlist is empty'}), 200

        result = []
        for item in wishlist_items:
            product = Product.query.get(item.product_id)
            if product:
                result.append({
                    'wishlist_id': item.wishlist_id,
                    'product_id': item.product_id,
                    'product_name': product.name,
                    'created_at': item.created_at
                })
            else:
                return jsonify({'message': f'Product with ID {item.product_id} not found'}), 404

        return jsonify(result), 200
    
    except Exception as e:
        return jsonify({'message': str(e)}), 500
    
@wishlist_routes.route('/wishlist/<string:wishlist_id>', methods=['DELETE'])
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

