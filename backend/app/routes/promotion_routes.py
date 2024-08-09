from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from app.models import db, Promotion, Store, Order
from datetime import datetime
from app.routes.auth import role_required

promotion_bp = Blueprint('promotion_routes', __name__)

@promotion_bp.route('/stores/<string:store_id>/promotions', methods=['POST'])
@jwt_required()
@role_required('seller')  # Ensure only sellers can create promotions
def create_promotion(store_id):
    current_user = get_jwt_identity()
    code = request.form.get('code')
    discount_percentage = request.form.get('discount_percentage')
    start_date = request.form.get('start_date')
    end_date = request.form.get('end_date')

    if not all([code, discount_percentage, start_date, end_date]):
        return jsonify({'message': 'Missing fields'}), 400

    try:
        start_date = datetime.strptime(start_date, '%Y-%m-%d').date()
        end_date = datetime.strptime(end_date, '%Y-%m-%d').date()

        if start_date > end_date:
            return jsonify({'message': 'Start date must be before end date'}), 400
        
        store = Store.query.get(store_id)
        if not store or store.seller_id != current_user['user_id']:
            return jsonify({'message': 'Unauthorized or Store not found'}), 403

        new_promotion = Promotion(
            promotion_id=Promotion.generate_promotion_id(),
            store_id=store_id,
            seller_id=current_user['user_id'],
            code=code,
            discount_percentage=float(discount_percentage),
            start_date=start_date,
            end_date=end_date
        )
        
        db.session.add(new_promotion)
        db.session.commit()
        
        return jsonify({'message': 'Promotion created successfully'}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({'message': str(e)}), 500

@promotion_bp.route('/promotions/<string:promotion_id>', methods=['GET'])
def get_promotion(promotion_id):
    promotion = Promotion.query.get(promotion_id)
    if not promotion:
        return jsonify({'message': 'Promotion not found'}), 404

    return jsonify({
        'promotion_id': promotion.promotion_id,
        'store_id': promotion.store_id,
        'seller_id': promotion.seller_id,
        'code': promotion.code,
        'discount_percentage': float(promotion.discount_percentage),
        'start_date': promotion.start_date.isoformat(),  
        'end_date': promotion.end_date.isoformat()
    }), 200

@promotion_bp.route('/promotions/<string:promotion_id>', methods=['PUT'])
@jwt_required()
@role_required('seller')
def update_promotion(promotion_id):
    current_user = get_jwt_identity()
    code = request.form.get('code')
    discount_percentage = request.form.get('discount_percentage')
    start_date = request.form.get('start_date')
    end_date = request.form.get('end_date')

    promotion = Promotion.query.get(promotion_id)
    if not promotion:
        return jsonify({'message': 'Promotion not found'}), 404

    store = Store.query.get(promotion.store_id)
    if store.seller_id != current_user['user_id']:
        return jsonify({'message': 'Unauthorized'}), 403

    if code:
        promotion.code = code
    if discount_percentage:
        promotion.discount_percentage = float(discount_percentage)
    if start_date:
        promotion.start_date = datetime.strptime(start_date, '%Y-%m-%d').date()
    if end_date:
        promotion.end_date = datetime.strptime(end_date, '%Y-%m-%d').date()

    try:
        db.session.commit()
        return jsonify({'message': 'Promotion updated successfully'}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({'message': str(e)}), 500

@promotion_bp.route('/promotions/<string:promotion_id>', methods=['DELETE'])
@jwt_required()
@role_required('seller')
def delete_promotion(promotion_id):
    current_user = get_jwt_identity()

    promotion = Promotion.query.get(promotion_id)
    if not promotion:
        return jsonify({'message': 'Promotion not found'}), 404

    store = Store.query.get(promotion.store_id)
    if store.seller_id != current_user['user_id']:
        return jsonify({'message': 'Unauthorized'}), 403

    try:
        db.session.delete(promotion)
        db.session.commit()
        return jsonify({'message': 'Promotion deleted successfully'}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({'message': str(e)}), 500

@promotion_bp.route('/stores/<string:store_id>/promotions', methods=['GET'])
def get_store_promotions(store_id):
    promotions = Promotion.query.filter_by(store_id=store_id).all()

    result = [{
        'promotion_id': promotion.promotion_id,
        'code': promotion.code,
        'discount_percentage': float(promotion.discount_percentage),
        'start_date': promotion.start_date.isoformat(),  
        'end_date': promotion.end_date.isoformat()
    } for promotion in promotions]

    return jsonify(result), 200

@promotion_bp.route('/orders/<int:order_id>/apply_promotion', methods=['POST'])
@jwt_required()
def apply_promotion(order_id):
    current_user = get_jwt_identity()

    # Get the promotion code from the form data
    promotion_code = request.form.get('code')
    if not promotion_code:
        return jsonify({'message': 'Promotion code is required'}), 400

    # Find the promotion
    promotion = Promotion.query.filter_by(code=promotion_code).first()
    if not promotion:
        return jsonify({'message': 'Invalid promotion code'}), 400

    # Check if the promotion is expired
    current_date = datetime.utcnow().date()
    if promotion.start_date > current_date or promotion.end_date < current_date:
        return jsonify({'message': 'Promotion code is expired'}), 400

    # Find the order
    order = Order.query.get(order_id)
    if not order:
        return jsonify({'message': 'Order not found'}), 404

    # Ensure the user is authorized to modify the order
    if order.user_id != current_user['user_id']:
        return jsonify({'message': 'Unauthorized'}), 403

    # Apply the promotion discount to the order
    discount_amount = (promotion.discount_percentage / 100) * order.total_amount
    order.total_amount -= discount_amount

    try:
        db.session.commit()
        return jsonify({
            'message': 'Promotion applied successfully',
            'new_total_amount': order.total_amount
        }), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({'message': str(e)}), 500
