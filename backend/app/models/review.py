from . import db
from sqlalchemy import Column, Integer, Text, TIMESTAMP, ForeignKey, CheckConstraint
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship

class Review(db.Model):
    __tablename__ = 'Reviews'

    review_id = Column(Integer, primary_key=True, autoincrement=True)
    product_id = Column(Integer, ForeignKey('Products.product_id'), nullable=False)
    consumer_id = Column(Integer, ForeignKey('Users.user_id'), nullable=False)
    rating = Column(Integer, CheckConstraint('rating BETWEEN 1 AND 5'))
    comment = Column(Text)
    created_at = Column(TIMESTAMP, server_default=func.now())