from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from mysql_connector import get_session
from sqlalchemy.exc import SQLAlchemyError
from app.models import db, Order, OrderItem, Product, Store, Cart, CartItem

order_bp = Blueprint('order_bp', __name__)

def clear_cart(session, user_id):
    cart = session.query(Cart).filter_by(consumer_id=user_id).first()
    if cart:
        items = session.query(CartItem).filter_by(cart_id=cart.cart_id).all()
        for item in items:
            session.delete(item)
        session.commit()

@order_bp.route('/orders', methods=['GET'])
@jwt_required()
def get_orders():
    user_id = get_jwt_identity()['user_id']
    orders = Order.query.filter_by(consumer_id=user_id).all()
    return jsonify([order.to_dict() for order in orders])

@order_bp.route('/orders', methods=['POST'])
@jwt_required()
def create_order():
    session = get_session()
    consumer_id = get_jwt_identity()['user_id']
    delivery_method = request.json.get('delivery_method', 'Delivery')  # Default to 'Delivery' if not provided

    if delivery_method not in ['Pickup', 'Delivery']:
        return jsonify({'error': 'Invalid delivery method'}), 400

    try:
        cart = session.query(Cart).filter_by(consumer_id=consumer_id).first()
        if not cart:
            return jsonify({'error': 'Cart not found or does not belong to the user'}), 404

        cart_items = session.query(CartItem).filter_by(cart_id=cart.cart_id).all()
        if not cart_items:
            return jsonify({'error': 'Cart is empty'}), 400

        order_id = Order.create_unique_order_id()
        total_amount = 0
        store_id = None
        seller_id = None

        first_item = cart_items[0]
        product = session.query(Product).filter_by(product_id=first_item.product_id).first()
        if product:
            store_id = product.store_id
            store = session.query(Store).filter_by(store_id=store_id).first()
            if store:
                seller_id = store.seller_id
        else:
            return jsonify({'error': 'Product not found'}), 404

        new_order = Order(
            order_id=order_id,
            consumer_id=consumer_id,
            seller_id=seller_id,
            store_id=store_id,
            cart_id=cart.cart_id,
            delivery_method=delivery_method,
            status='Pending',
            total_amount=total_amount
        )
        session.add(new_order)

        for item in cart_items:
            product = session.query(Product).filter_by(product_id=item.product_id).first()
            if not product:
                return jsonify({'error': f'Product with ID {item.product_id} not found'}), 404

            price = product.price * item.quantity
            total_amount += price

            order_item = OrderItem(
                order_item_id=OrderItem.generate_item_id(),
                order_id=order_id,
                product_id=item.product_id,
                quantity=item.quantity,
                price=price
            )
            session.add(order_item)

        new_order.total_amount = total_amount
        session.commit()

        # Clear the cart after successful order creation
        clear_cart(session, consumer_id)

        return jsonify(new_order.to_dict()), 201
    except SQLAlchemyError as e:
        session.rollback()
        return jsonify({'error': str(e)}), 500
    finally:
        session.close()


@order_bp.route('/orders/<string:order_id>/cancel', methods=['PUT'])
@jwt_required()
def cancel_order(order_id):
    user_id = get_jwt_identity()['user_id']
    order = Order.query.filter_by(order_id=order_id, consumer_id=user_id).first()
    if order is None:
        return jsonify({'error': 'Order not found'}), 404
    
    if order.status == 'Completed':
        return jsonify({'error': 'Completed orders cannot be cancelled'}), 400

    try:
        order.status = 'Cancelled'
        db.session.commit()
        return jsonify(order.to_dict()), 200
    except SQLAlchemyError as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 400

@order_bp.route('/orders/<string:order_id>', methods=['PUT'])
@jwt_required()
def update_order(order_id):
    user_id = get_jwt_identity()['user_id']
    user_role = get_jwt_identity()['role']

    # Fetch the order
    order = Order.query.filter_by(order_id=order_id).first()
    if order is None:
        return jsonify({'error': 'Order not found'}), 404

    # Prevent updates if the order is already Completed or Cancelled
    if order.status in ['Completed', 'Cancelled']:
        return jsonify({'error': f'Cannot update an order that is already {order.status}'}), 400

    # If the user is the consumer
    if user_role == 'consumer':
        if order.consumer_id != user_id:
            return jsonify({'error': 'You do not have permission to update this order'}), 403
        
        # Update delivery method
        delivery_method = request.json.get('delivery_method')
        if delivery_method:
            if delivery_method not in ['Pickup', 'Delivery']:
                return jsonify({'error': 'Invalid delivery method'}), 400
            order.delivery_method = delivery_method

    # If the user is the seller
    elif user_role == 'seller':
        if order.seller_id != user_id:
            return jsonify({'error': 'You do not have permission to update this order'}), 403

        # Update order status
        status = request.json.get('status')
        if status:
            if status not in ['Processing', 'Shipped', 'Delivered', 'Completed', 'Cancelled']:
                return jsonify({'error': 'Invalid status'}), 400
            order.status = status

    else:
        return jsonify({'error': 'Invalid user role'}), 403

    try:
        db.session.commit()
        return jsonify(order.to_dict()), 200
    except SQLAlchemyError as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 400
