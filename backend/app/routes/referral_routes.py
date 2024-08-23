from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from app.models import db, Referral, User

referral_routes = Blueprint('referral_routes', __name__)

@referral_routes.route('/referrals', methods=['POST'])
@jwt_required()
def create_referral():
    current_user = get_jwt_identity()
    referred_id = request.json.get('referred_id')
    code = request.json.get('code')

    if not all([referred_id, code]):
        return jsonify({'message': 'Missing fields'}), 400

    if User.query.get(referred_id) is None:
        return jsonify({'message': 'Referred user does not exist'}), 404

    new_referral = Referral(
        referrer_id=current_user['user_id'],
        referred_id=int(referred_id),
        code=code
    )

    try:
        db.session.add(new_referral)
        db.session.commit()
        return jsonify({'message': 'Referral created successfully'}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({'message': str(e)}), 500

@referral_routes.route('/referrals/<int:referral_id>', methods=['GET'])
@jwt_required()
def get_referral(referral_id):
    referral = Referral.query.get(referral_id)
    if not referral:
        return jsonify({'message': 'Referral not found'}), 404

    return jsonify({
        'referral_id': referral.referral_id,
        'referrer_id': referral.referrer_id,
        'referred_id': referral.referred_id,
        'code': referral.code,
        'created_at': referral.created_at
    }), 200

@referral_routes.route('/referrals/<int:referral_id>', methods=['DELETE'])
@jwt_required()
def delete_referral(referral_id):
    current_user = get_jwt_identity()

    referral = Referral.query.get(referral_id)
    if not referral:
        return jsonify({'message': 'Referral not found'}), 404

    if referral.referrer_id != current_user['user_id']:
        return jsonify({'message': 'Unauthorized'}), 403

    try:
        db.session.delete(referral)
        db.session.commit()
        return jsonify({'message': 'Referral deleted successfully'}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({'message': str(e)}), 500
