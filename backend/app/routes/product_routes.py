from flask import Blueprint, request, jsonify, abort
from flask_jwt_extended import jwt_required, get_jwt_identity
from sqlalchemy.exc import IntegrityError
from app.models import db, Product, Store
from .auth import role_required

product_bp = Blueprint('product_bp', __name__)

def validate_product_data(data):
    errors = []
    if not data.get('name'):
        errors.append('Name is required.')
    if not data.get('price'):
        errors.append('Price is required.')
    if not data.get('quantity'):
        errors.append('Quantity is required.')
    if not data.get('product_type') or data['product_type'] not in ['Standard', 'Premium']:
        errors.append('Product type must be either "Standard" or "Premium".')
    return errors

@product_bp.route('/stores/<store_id>/products', methods=['POST'])
@jwt_required()
@role_required('seller')
def create_product(store_id): # Seller Profile Store Page
    current_user = get_jwt_identity()
    seller_id = current_user['user_id']

    store = Store.query.filter_by(store_id=store_id, seller_id=seller_id).first()
    if not store:
        abort(400, 'Invalid store ID.')

    data = request.json
    errors = validate_product_data(data)
    if errors:
        return jsonify({'errors': errors}), 400

    existing_product = Product.query.filter_by(store_id=store_id, name=data['name']).first()
    if existing_product:
        return jsonify({'error': 'A product with the same name already exists in this store.'}), 400

    product_id = Product.generate_product_id()

    try:
        new_product = Product(
            product_id=product_id,
            seller_id=seller_id,
            store_id=store_id,
            name=data.get('name'),
            description=data.get('description', ''),
            price=data.get('price'),
            quantity=data.get('quantity'),
            product_type=data.get('product_type'),
            image_url=data.get('image_url', ''),
        )
        db.session.add(new_product)
        db.session.commit()
        return jsonify(new_product.to_dict()), 201
    except IntegrityError:
        db.session.rollback()
        abort(400, 'Error creating product. Check if seller_id and store_id are valid.')

@product_bp.route('/stores/<store_id>/products', methods=['GET'])
def get_products_by_store(store_id): # Store Products Page
    products = Product.query.filter_by(store_id=store_id).all()
    if not products:
        return jsonify({'message': 'No products found for this store.'}), 404
    return jsonify([product.to_dict() for product in products]), 200

@product_bp.route('/products', methods=['GET'])
def get_all_products(): # Product Page
    products = Product.query.all()
    return jsonify([product.to_dict() for product in products])

@product_bp.route('/products/<product_id>', methods=['GET'])
def get_product(product_id): # Product Info/Detail Page
    product = Product.query.get(product_id)
    if not product:
        abort(404, 'Product not found.')
    return jsonify(product.to_dict())

@product_bp.route('/products/<product_id>', methods=['PUT'])
@jwt_required()
@role_required('seller')
def update_product(product_id): # Seller Profile Store Page
    data = request.json
    product = Product.query.get(product_id)
    if not product:
        abort(404, 'Product not found.')

    product.name = data.get('name', product.name)
    product.description = data.get('description', product.description)
    product.price = data.get('price', product.price)
    product.quantity = data.get('quantity', product.quantity)
    product.product_type = data.get('product_type', product.product_type)
    product.image_url = data.get('image_url', product.image_url)
    
    db.session.commit()
    return jsonify(product.to_dict())

@product_bp.route('/products/<product_id>', methods=['DELETE'])
@jwt_required()
@role_required('seller')
def delete_product(product_id): # Seller Profile Store Page
    product = Product.query.get(product_id)
    if not product:
        abort(404, 'Product not found.')

    try:
        product_data = product.to_dict()  # Get the product details before deletion
        db.session.delete(product)
        db.session.commit()
        return jsonify({
            'message': 'Product successfully deleted.',
            'product': product_data
        }), 200
    except IntegrityError:
        db.session.rollback()
        abort(500, 'Error deleting product. Please try again later.')

@product_bp.route('/products/filter', methods=['GET'])
def filter_products():
    category = request.args.get('category')
    location = request.args.get('location')
    name = request.args.get('name', '')

    query = Product.query

    if category and category != 'All':
        query = query.filter(Product.product_type == category)

    if location and location != 'All':
        query = query.filter(Product.location.ilike(f'%{location}%'))

    if name:
        query = query.filter(Product.name.ilike(f'%{name}%'))

    products = query.all()

    if not products:
        return jsonify({'message': 'No products found for the given criteria.'}), 404

    return jsonify([product.to_dict() for product in products]), 200

