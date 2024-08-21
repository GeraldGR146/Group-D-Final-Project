from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from app.models import db, Transaction, Order
from sqlalchemy.exc import SQLAlchemyError
from werkzeug.exceptions import BadRequest

transaction_bp = Blueprint('transaction_routes', __name__)

@transaction_bp.route('/transactions', methods=['POST'])
@jwt_required()
def create_transaction():
    current_user = get_jwt_identity()
    
    try:
        payment_method = request.json['payment_method']
        
        # Check if the payment method is provided
        if not payment_method:
            raise BadRequest('Missing payment method')
        
        # Check if the payment method is valid
        valid_payment_methods = {'credit_card', 'debit_card', 'paypal', 'cash', 'cod'}
        if payment_method not in valid_payment_methods:
            raise BadRequest('Invalid payment method')
        
        # Find an eligible order for the transaction
        order = Order.query.filter_by(consumer_id=current_user['user_id'], status='Pending').first()
        if not order:
            return jsonify({'message': 'No pending order found for this user'}), 404
        
        # Calculate the total amount for the order
        amount = float(order.total_amount)  # Assuming 'total_amount' is a field in the Order model
        
        # Auto-set the transaction status based on payment method or logic
        if payment_method in {'credit_card', 'debit_card', 'paypal'}:
            status = 'Pending'  # Assume payment needs to be processed
        elif payment_method in {'cash', 'cod'}:
            status = 'Completed'  # Assume payment is immediate
        
        # Create and save the transaction
        new_transaction = Transaction(
            transaction_id=Transaction.generate_transaction_id(),
            order_id=order.order_id,
            amount=amount,
            payment_method=payment_method,
            status=status
        )
        
        if status == 'Completed':
            order.status = 'Paid'
        
        db.session.add(new_transaction)
        db.session.commit()
        
        return jsonify({'message': 'Transaction created successfully'}), 201
    
    except (ValueError, KeyError) as e:
        return jsonify({'message': 'Invalid input: ' + str(e)}), 400
    except SQLAlchemyError as e:
        db.session.rollback()
        return jsonify({'message': 'Database error: ' + str(e)}), 500


@transaction_bp.route('/transactions/<string:transaction_id>', methods=['GET'])
@jwt_required()
def get_transaction(transaction_id):
    current_user = get_jwt_identity()
    
    try:
        # Retrieve the transaction
        transaction = Transaction.query.get(transaction_id)
        if not transaction:
            return jsonify({'message': 'Transaction not found'}), 404
        
        # Verify the order and its ownership
        order = Order.query.get(transaction.order_id)
        if not order or order.consumer_id != current_user['user_id']:
            return jsonify({'message': 'Unauthorized'}), 403
        
        return jsonify({
            'transaction_id': transaction.transaction_id,
            'order_id': transaction.order_id,
            'transaction_date': transaction.transaction_date,
            'amount': float(transaction.amount),
            'payment_method': transaction.payment_method,
            'status': transaction.status
        }), 200
    
    except SQLAlchemyError as e:
        return jsonify({'message': 'Database error: ' + str(e)}), 500


@transaction_bp.route('/transactions', methods=['GET'])
@jwt_required()
def get_transactions():
    current_user = get_jwt_identity()
    
    try:
        page = request.args.get('page', 1, type=int)
        per_page = request.args.get('per_page', 10, type=int)
        
        # Join transactions with orders and filter by consumer_id
        transactions_query = Transaction.query.join(Order).filter(Order.consumer_id == current_user['user_id'])
        
        # Correct usage of paginate() with keyword arguments
        transactions_paginated = transactions_query.paginate(page=page, per_page=per_page, error_out=False)
        
        # Prepare the result
        result = [{
            'transaction_id': transaction.transaction_id,
            'order_id': transaction.order_id,
            'transaction_date': transaction.transaction_date,
            'amount': float(transaction.amount),
            'payment_method': transaction.payment_method,
            'status': transaction.status
        } for transaction in transactions_paginated.items]
        
        # Return the paginated results
        return jsonify({
            'transactions': result,
            'total': transactions_paginated.total,
            'page': transactions_paginated.page,
            'pages': transactions_paginated.pages
        }), 200
    
    except SQLAlchemyError as e:
        return jsonify({'message': 'Database error: ' + str(e)}), 500
