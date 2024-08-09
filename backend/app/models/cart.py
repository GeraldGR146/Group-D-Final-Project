from . import db
from sqlalchemy import Column, String, Integer, ForeignKey, DateTime, DECIMAL
from sqlalchemy.orm import relationship
from datetime import datetime
import uuid

class Cart(db.Model):
    __tablename__ = 'Carts'

    cart_id = Column(String(50), primary_key=True)
    consumer_id = Column(String(50), ForeignKey('Users.user_id'), nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)

    @staticmethod
    def generate_cart_id():
        return f"CR_{uuid.uuid4().hex[:8]}"

    @staticmethod
    def create_unique_cart_id(session):
        while True:
            cart_id = Cart.generate_cart_id()
            if not session.query(Cart).filter_by(cart_id=cart_id).first():
                return cart_id
            
    def to_dict(self):
        return {
            'cart_id': self.cart_id,
            'consumer_id': self.consumer_id,
            'created_at': self.created_at.isoformat(),  # Convert datetime to ISO format string
            'items': [item.to_dict() for item in self.items]
        }


class CartItem(db.Model):
    __tablename__ = 'CartItems'

    cart_item_id = Column(String(50), primary_key=True)
    cart_id = Column(String(50), ForeignKey('Carts.cart_id'), nullable=False)
    product_id = Column(String(50), ForeignKey('Products.product_id'), nullable=False)
    quantity = Column(Integer, nullable=False)
    added_at = Column(DateTime, default=datetime.utcnow)

    @staticmethod
    def generate_cart_item_id():
        return f"CI_{uuid.uuid4().hex[:8]}"

    @staticmethod
    def create_unique_cart_item_id(session):
        while True:
            cart_item_id = CartItem.generate_cart_item_id()
            if not session.query(CartItem).filter_by(cart_item_id=cart_item_id).first():
                return cart_item_id

    def to_dict(self):
        return {
            'cart_item_id': self.cart_item_id,
            'cart_id': self.cart_id,
            'product_id': self.product_id,
            'quantity': self.quantity,
            'added_at': self.added_at.isoformat()  # Convert datetime to ISO format string
        }