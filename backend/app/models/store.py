from . import db
from sqlalchemy import Column, Integer, String, Date, Text, TIMESTAMP, ForeignKey
from sqlalchemy.sql import func
import uuid

class Store(db.Model):
    __tablename__ = 'Stores'

    store_id = Column(String(50), primary_key=True)
    seller_id = Column(String(50), ForeignKey('Users.user_id'), nullable=False)
    name = Column(String(100), nullable=False)
    location = Column(String(255), nullable=False)
    description = Column(Text)
    created_at = Column(TIMESTAMP, server_default=func.now())

    @staticmethod
    def generate_store_id(seller_id):
        base_id = uuid.uuid4().hex[:8]
        return f"ST_{base_id}"

    @staticmethod
    def create_unique_store_id(seller_id):
        while True:
            store_id = Store.generate_store_id(seller_id)
            if not Store.query.filter_by(store_id=store_id).first():
                return store_id
            
    def to_dict(self):
        return {
            'store_id': self.store_id,
            'seller_id': self.seller_id,
            'name': self.name,
            'location': self.location,
            'description': self.description,
            'created_at': self.created_at
        }