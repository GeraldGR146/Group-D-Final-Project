from . import db
from sqlalchemy import Column, Integer, String, Text, TIMESTAMP, ForeignKey, CheckConstraint
from sqlalchemy.sql import func
import uuid

class Review(db.Model):
    __tablename__ = 'Reviews'

    review_id = Column(String(50), primary_key=True)
    product_id = Column(String(50), ForeignKey('Products.product_id'), nullable=False)
    consumer_id = Column(String(50), ForeignKey('Users.user_id'), nullable=False)
    rating = Column(Integer, CheckConstraint('rating BETWEEN 1 AND 5'))
    comment = Column(Text)
    created_at = Column(TIMESTAMP, server_default=func.now())
    
    @staticmethod
    def generate_review_id():
        return f"R_{uuid.uuid4().hex[:8]}"

    def __repr__(self):
        return f"<Review(review_id={self.review_id}, product_id={self.product_id}, consumer_id={self.consumer_id}, rating={self.rating})>"