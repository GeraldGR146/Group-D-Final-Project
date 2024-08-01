from . import db
from sqlalchemy import Column, Integer, DECIMAL, Enum, TIMESTAMP, ForeignKey
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship

class Order(db.Model):
    __tablename__ = 'Orders'

    order_id = Column(Integer, primary_key=True, autoincrement=True)
    consumer_id = Column(Integer, ForeignKey('Users.user_id'), nullable=False)
    seller_id = Column(Integer, ForeignKey('Users.user_id'), nullable=False)
    store_id = Column(Integer, ForeignKey('Stores.store_id'), nullable=False)
    order_date = Column(TIMESTAMP, server_default=func.now())
    total_amount = Column(DECIMAL(10, 2), nullable=False)
    delivery_method = Column(Enum('pickup', 'delivery'), nullable=False)
    status = Column(Enum('pending', 'completed', 'cancelled'), nullable=False)

class OrderItem(db.Model):
    __tablename__ = 'OrderItems'

    order_item_id = Column(Integer, primary_key=True, autoincrement=True)
    order_id = Column(Integer, ForeignKey('Orders.order_id'), nullable=False)
    product_id = Column(Integer, ForeignKey('Products.product_id'), nullable=False)
    quantity = Column(Integer, nullable=False)
    price = Column(DECIMAL(10, 2), nullable=False)