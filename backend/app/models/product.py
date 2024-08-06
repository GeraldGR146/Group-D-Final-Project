from . import db
from sqlalchemy import Column, Integer, String, Text, DECIMAL, Enum, TIMESTAMP, ForeignKey
from sqlalchemy.sql import func
import uuid

class Product(db.Model):
    __tablename__ = 'Products'

    product_id = Column(String(50), primary_key=True)
    seller_id = Column(String(50), ForeignKey('Users.user_id'), nullable=False)
    store_id = Column(String(50), ForeignKey('Stores.store_id'), nullable=False)
    name = Column(String(100), nullable=False)
    description = Column(Text)
    price = Column(DECIMAL(10, 2), nullable=False)
    quantity = Column(Integer, nullable=False)
    product_type = Column(Enum('standard', 'premium'), nullable=False)
    image_url = Column(String(255))
    created_at = Column(TIMESTAMP, server_default=func.now())

    @staticmethod
    def generate_product_id():
        return f"PR_{uuid.uuid4().hex[:8]}"

    @staticmethod
    def create_unique_product_id():
        while True:
            product_id = Product.generate_product_id()
            if not Product.query.filter_by(product_id=product_id).first():
                return product_id

    def to_dict(self):
        return {
            'product_id': self.product_id,
            'seller_id': self.seller_id,
            'store_id': self.store_id,
            'name': self.name,
            'description': self.description,
            'price': str(self.price),  # Convert DECIMAL to string for JSON compatibility
            'quantity': self.quantity,
            'product_type': self.product_type,
            'image_url': self.image_url,
            'created_at': self.created_at.isoformat()  # Convert TIMESTAMP to ISO format
        }