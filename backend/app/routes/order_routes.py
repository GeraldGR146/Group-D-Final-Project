from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from app.models import db, Order, OrderItem, Product, Store
from sqlalchemy.exc import SQLAlchemyError
from app.routes.auth import role_required

order_bp = Blueprint('order_bp', __name__)

@order_bp.route('/orders', methods=['GET'])
@jwt_required()
def get_orders():
    user_id = get_jwt_identity()['user_id']
    orders = Order.query.filter_by(consumer_id=user_id).all()
    return jsonify([order.to_dict() for order in orders])

@order_bp.route('/orders/<string:order_id>', methods=['GET'])
@jwt_required()
def get_order(order_id):
    user_id = get_jwt_identity()['user_id']
    order = Order.query.filter_by(order_id=order_id, consumer_id=user_id).first()
    if order is None:
        return jsonify({'error': 'Order not found'}), 404
    return jsonify(order.to_dict())

@order_bp.route('/orders', methods=['POST'])
@jwt_required()
def create_order():
    user_id = get_jwt_identity()['user_id']
    delivery_method = request.form.get('delivery_method')
    items = request.form.getlist('items')  # Expecting items to be a list of dictionaries

    if not all([delivery_method, items]):
        return jsonify({'message': 'Missing fields'}), 400

    try:
        order_id = Order.create_unique_order_id()
        total_amount = 0

        new_order = Order(
            order_id=order_id,
            consumer_id=user_id,
            store_id=None,  # Leave this as None, or handle store logic as required
            delivery_method=delivery_method,
            status='pending',
            total_amount=total_amount  # Placeholder, will be updated below
        )
        db.session.add(new_order)

        for item in items:
            product_name = item.get('product_name')
            quantity = int(item.get('quantity'))
            product = Product.query.filter_by(name=product_name).first()

            if not product:
                return jsonify({'error': f'Product with name {product_name} not found'}), 400

            price = product.price * quantity
            total_amount += price

            item_id = OrderItem.generate_item_id()
            new_order_item = OrderItem(
                order_item_id=item_id,
                order_id=order_id,
                product_id=product.product_id,  # Use the product ID here
                quantity=quantity,
                price=price
            )
            db.session.add(new_order_item)

        new_order.total_amount = total_amount
        db.session.commit()
        return jsonify(new_order.to_dict()), 201
    except SQLAlchemyError as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 400

@order_bp.route('/orders/<string:order_id>/cancel', methods=['PUT'])
@jwt_required()
def cancel_order(order_id):
    user_id = get_jwt_identity()['user_id']
    order = Order.query.filter_by(order_id=order_id, consumer_id=user_id).first()
    if order is None:
        return jsonify({'error': 'Order not found'}), 404
    
    if order.status == 'completed':
        return jsonify({'error': 'Completed orders cannot be cancelled'}), 400

    try:
        order.status = 'cancelled'
        db.session.commit()
        return jsonify(order.to_dict()), 200
    except SQLAlchemyError as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 400

@order_bp.route('/orders/<string:order_id>', methods=['PUT'])
@jwt_required()
def update_order(order_id):
    user_id = get_jwt_identity()['user_id']
    order = Order.query.filter_by(order_id=order_id, consumer_id=user_id).first()
    if order is None:
        return jsonify({'error': 'Order not found'}), 404
    
    if order.status != 'pending':
        return jsonify({'error': 'Only pending orders can be updated'}), 400

    delivery_method = request.form.get('delivery_method')
    status = request.form.get('status')
    items = request.form.getlist('items')  # Expecting items to be a list of dictionaries

    if not items:
        return jsonify({'message': 'No items provided'}), 400

    try:
        # Clear existing items
        OrderItem.query.filter_by(order_id=order_id).delete()

        total_amount = 0
        for item in items:
            product_name = item.get('product_name')
            quantity = int(item.get('quantity'))
            product = Product.query.filter_by(name=product_name).first()

            if not product:
                return jsonify({'error': f'Product with name {product_name} not found'}), 400

            price = product.price * quantity
            total_amount += price

            item_id = OrderItem.generate_item_id()
            new_order_item = OrderItem(
                order_item_id=item_id,
                order_id=order_id,
                product_id=product.product_id,  # Use the product ID here
                quantity=quantity,
                price=price
            )
            db.session.add(new_order_item)

        order.total_amount = total_amount
        order.delivery_method = delivery_method or order.delivery_method
        order.status = status or order.status

        db.session.commit()
        return jsonify(order.to_dict())
    except SQLAlchemyError as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 400
