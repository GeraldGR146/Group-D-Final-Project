from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from app.models import db, Store
from sqlalchemy.exc import SQLAlchemyError
from app.routes.auth import role_required

store_bp = Blueprint('store_bp', __name__)

@store_bp.route('/stores', methods=['GET'])
@jwt_required()
@role_required('seller')
def get_stores():
    seller_id = get_jwt_identity()  # Get the current user's ID

    # Ensure seller_id is a string
    if isinstance(seller_id, dict):
        seller_id = seller_id.get('user_id', None)

    if not seller_id:
        return jsonify({'error': 'Invalid seller ID'}), 400

    try:
        stores = Store.query.filter_by(seller_id=seller_id).all()
        return jsonify([store.to_dict() for store in stores])
    except SQLAlchemyError as e:
        return jsonify({'error': f'An error occurred while retrieving stores: {str(e)}'}), 500

@store_bp.route('/stores/<string:store_id>', methods=['GET'])
@jwt_required()
@role_required('seller')
def get_store(store_id):
    try:
        store = Store.query.get(store_id)
        if store is None:
            return jsonify({'error': 'Store not found'}), 404
        return jsonify(store.to_dict())
    except SQLAlchemyError as e:
        return jsonify({'error': f'An error occurred while retrieving the store: {str(e)}'}), 500

@store_bp.route('/stores', methods=['POST'])
@jwt_required()
@role_required('seller')
def create_store():
    name = request.form.get('name')
    location = request.form.get('location')
    description = request.form.get('description')

    # Debug print statements
    print(f"Received Data: Name={name}, Location={location}, Description={description}")

    if not name or not location:
        return jsonify({'message': 'Name and location are required'}), 400

    try:
        # Extract seller_id from JWT identity
        seller_id = get_jwt_identity()  # Assuming this returns the user_id as a string
        
        # Ensure seller_id is a string
        if isinstance(seller_id, dict):
            seller_id = seller_id.get('user_id', None)

        # Validate seller_id
        if not seller_id:
            return jsonify({'message': 'Invalid seller ID'}), 400

        store_id = Store.create_unique_store_id(seller_id)
        new_store = Store(
            store_id=store_id,
            seller_id=seller_id,  # Ensure this is a string or integer
            name=name,
            location=location,
            description=description
        )
        
        # Debug print statement
        print("Adding new store:", new_store.to_dict())
        
        db.session.add(new_store)
        db.session.commit()
        return jsonify(new_store.to_dict()), 201
    except SQLAlchemyError as e:
        db.session.rollback()
        print("Error Details:", str(e))
        return jsonify({'error': f'An error occurred while creating the store: {str(e)}'}), 500

@store_bp.route('/stores/<string:store_id>', methods=['PUT'])
@jwt_required()
@role_required('seller')
def update_store(store_id):
    store = Store.query.get(store_id)
    if store is None:
        return jsonify({'error': 'Store not found'}), 404

    name = request.form.get('name')
    location = request.form.get('location')
    description = request.form.get('description')

    try:
        if name:
            store.name = name
        if location:
            store.location = location
        if description:
            store.description = description
        
        db.session.commit()
        return jsonify(store.to_dict())
    except SQLAlchemyError as e:
        db.session.rollback()
        return jsonify({'error': f'An error occurred while updating the store: {str(e)}'}), 500

@store_bp.route('/stores/<string:store_id>', methods=['DELETE'])
@jwt_required()
@role_required('seller')
def delete_store(store_id):
    store = Store.query.get(store_id)
    if store is None:
        return jsonify({'error': 'Store not found'}), 404

    try:
        db.session.delete(store)
        db.session.commit()
        return '', 204
    except SQLAlchemyError as e:
        db.session.rollback()
        return jsonify({'error': f'An error occurred while deleting the store: {str(e)}'}), 500
