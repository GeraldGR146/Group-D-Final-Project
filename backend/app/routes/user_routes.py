from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity, unset_jwt_cookies
from app.models import User, db, bcrypt
user_routes = Blueprint('user_routes', __name__)

@user_routes.route('/register', methods=['POST'])
def register():
    username = request.form.get('username')
    email = request.form.get('email')
    password = request.form.get('password')
    role = request.form.get('role')
    
    if not all([username, email, password, role]):
        return jsonify({'message': 'Missing fields'}), 400
    
    if User.query.filter_by(email=email).first():
        return jsonify({'message': 'Email already registered'}), 400
    
    new_user = User(username=username, email=email, role=role)
    new_user.set_password(password)
    
    db.session.add(new_user)
    db.session.commit()
    
    return jsonify({'message': 'User registered successfully'}), 201

@user_routes.route('/login', methods=['POST'])
def login():
    email = request.form.get('email')
    password = request.form.get('password')
    
    user = User.query.filter_by(email=email).first()
    
    if not user or not user.check_password(password):
        return jsonify({'message': 'Invalid credentials'}), 401
    
    access_token = create_access_token(identity={'user_id': user.user_id, 'username': user.username, 'role': user.role})
    
    return jsonify({'access_token': access_token}), 200

@user_routes.route('/logout', methods=['POST'])
@jwt_required()
def logout():
    # Unset the JWT cookies and inform the client
    response = jsonify({'message': 'Logout successful'})
    unset_jwt_cookies(response)
    return response, 200

@user_routes.route('/me', methods=['GET'])
@jwt_required()
def get_user():
    current_user = get_jwt_identity()
    
    user = User.query.get(current_user['user_id'])
    
    if not user:
        return jsonify({'message': 'User not found'}), 404
    
    return jsonify({
        'username': user.username,
        'email': user.email,
        'role': user.role,
        'created_at': user.created_at
    }), 200
