from . import db, bcrypt
from sqlalchemy import Column, Integer, String, Enum, TIMESTAMP
from sqlalchemy.sql import func
import uuid

class User(db.Model):
    __tablename__ = 'Users'

    user_id = Column(String(50), primary_key=True)
    username = Column(String(50), nullable=False)
    email = Column(String(100), nullable=False, unique=True)
    password_hash = Column(String(255), nullable=False)
    role = Column(Enum('consumer', 'seller'), nullable=False)
    created_at = Column(TIMESTAMP, server_default=func.now())

    def set_password(self, password):
        self.password_hash = bcrypt.generate_password_hash(password).decode('utf-8')

    def check_password(self, password):
        return bcrypt.check_password_hash(self.password_hash, password)
    
    @staticmethod
    def generate_role_specific_id(role, base_id=None):
        role_prefix = role.upper()[0]  # Get the first letter of the role and make it uppercase
        unique_id = uuid.uuid4().hex[:8]  # Generate a short unique ID
        if base_id:
            return f"{role_prefix}_{base_id}"
        return f"{role_prefix}_{unique_id}"

    @staticmethod
    def create_unique_user_id(role):
        while True:
            user_id = User.generate_role_specific_id(role)
            if not User.query.filter_by(user_id=user_id).first():
                return user_id
