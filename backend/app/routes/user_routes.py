from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity, unset_jwt_cookies
from app.models import User, db, bcrypt
import re

user_bp = Blueprint('user_routes', __name__)

def is_valid_email(email):
    email_regex = r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'
    return re.match(email_regex, email)

def is_strong_password(password):
    return len(password) >= 8 and any(c.isalpha() for c in password) and any(c.isdigit() for c in password)

@user_bp.route('/register', methods=['POST'])
def register():
    username = request.form.get('username')
    email = request.form.get('email')
    password = request.form.get('password')
    role = request.form.get('role')
    
    if not all([username, email, password, role]):
        return jsonify({'message': 'Missing fields'}), 400

    if not is_valid_email(email):
        return jsonify({'message': 'Invalid email format'}), 400

    if not is_strong_password(password):
        return jsonify({'message': 'Password must be at least 8 characters long, containing both letters and numbers'}), 400

    if User.query.filter_by(username=username).first():
        return jsonify({'message': 'Username already taken'}), 400
    
    if User.query.filter_by(email=email).first():
        return jsonify({'message': 'Email already registered'}), 400

    user_id = User.create_unique_user_id(role)
    
    new_user = User(user_id=user_id, username=username, email=email, role=role)
    new_user.set_password(password)
    
    db.session.add(new_user)
    db.session.commit()
    
    return jsonify({'message': 'User registered successfully'}), 201

@user_bp.route('/login', methods=['POST'])
def login():
    email = request.form.get('email')
    password = request.form.get('password')
    
    user = User.query.filter_by(email=email).first()
    
    if not user or not user.check_password(password):
        return jsonify({'message': 'Invalid credentials'}), 401
    
    access_token = create_access_token(
        identity={
            'user_id': user.user_id,
            'username': user.username,
            'role': user.role
        }
    )
    
    return jsonify({'access_token': access_token}), 200

@user_bp.route('/logout', methods=['POST'])
@jwt_required()
def logout():
    response = jsonify({'message': 'Logout successful'})
    unset_jwt_cookies(response)
    return response, 200

@user_bp.route('/me', methods=['GET'])
@jwt_required()
def get_user():
    current_user = get_jwt_identity()
    
    user = User.query.get(current_user['user_id'])
    
    if not user:
        return jsonify({'message': 'User not found'}), 404
    
    return jsonify({
        'user_id': user.user_id,
        'username': user.username,
        'email': user.email,
        'role': user.role,
        'created_at': user.created_at
    }), 200

@user_bp.route('/me/update', methods=['PUT'])
@jwt_required()
def update_user():
    current_user = get_jwt_identity()
    user = User.query.get(current_user['user_id'])
    
    if not user:
        return jsonify({'message': 'User not found'}), 404

    username = request.form.get('username')
    email = request.form.get('email')
    password = request.form.get('password')
    
    if username:
        if User.query.filter_by(username=username).first():
            return jsonify({'message': 'Username already taken'}), 400
        user.username = username

    if email:
        if not is_valid_email(email):
            return jsonify({'message': 'Invalid email format'}), 400
        if User.query.filter_by(email=email).first():
            return jsonify({'message': 'Email already registered'}), 400
        user.email = email

    if password:
        if not is_strong_password(password):
            return jsonify({'message': 'Password must be at least 8 characters long, containing both letters and numbers'}), 400
        user.set_password(password)
    
    db.session.commit()
    
    return jsonify({'message': 'User updated successfully'}), 200
