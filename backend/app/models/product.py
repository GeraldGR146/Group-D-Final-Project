from . import db
from sqlalchemy import Column, Integer, String, Text, DECIMAL, Enum, TIMESTAMP, ForeignKey
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship

class Product(db.Model):
    __tablename__ = 'Products'

    product_id = Column(Integer, primary_key=True, autoincrement=True)
    seller_id = Column(Integer, ForeignKey('Users.user_id'), nullable=False)
    store_id = Column(Integer, ForeignKey('Stores.store_id'), nullable=False)
    name = Column(String(100), nullable=False)
    description = Column(Text)
    price = Column(DECIMAL(10, 2), nullable=False)
    quantity = Column(Integer, nullable=False)
    product_type = Column(Enum('standard', 'premium'), nullable=False)
    image_url = Column(String(255))
    created_at = Column(TIMESTAMP, server_default=func.now())