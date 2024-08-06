from . import db
from sqlalchemy import Column, Integer, String, TIMESTAMP, ForeignKey
from sqlalchemy.sql import func
import uuid

class Wishlist(db.Model):
    __tablename__ = 'Wishlist'

    wishlist_id = Column(String(50), primary_key=True)
    consumer_id = Column(String(50), ForeignKey('Users.user_id'), nullable=False)
    product_id = Column(String(50), ForeignKey('Products.product_id'), nullable=False)
    created_at = Column(TIMESTAMP, server_default=func.now())
    
    @staticmethod
    def generate_wishlist_id():
        return f"W_{uuid.uuid4().hex[:8]}"