from . import db
from sqlalchemy import Column, Integer, TIMESTAMP, ForeignKey
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship

class Wishlist(db.Model):
    __tablename__ = 'Wishlist'

    wishlist_id = Column(Integer, primary_key=True, autoincrement=True)
    consumer_id = Column(Integer, ForeignKey('Users.user_id'), nullable=False)
    product_id = Column(Integer, ForeignKey('Products.product_id'), nullable=False)
    created_at = Column(TIMESTAMP, server_default=func.now())