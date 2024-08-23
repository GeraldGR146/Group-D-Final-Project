from . import db
from sqlalchemy import Column, Integer, String, Float, DECIMAL, Enum, TIMESTAMP, ForeignKey
from sqlalchemy.sql import func
import uuid

class Order(db.Model):
    __tablename__ = 'Orders'

    order_id = Column(String(50), primary_key=True)
    consumer_id = Column(String(50), ForeignKey('Users.user_id'), nullable=False)
    seller_id = Column(String(50), ForeignKey('Users.user_id'), nullable=False)
    store_id = Column(String(50), ForeignKey('Stores.store_id'), nullable=False)
    cart_id = Column(String(50), ForeignKey('Carts.cart_id'), nullable=False)
    order_date = Column(TIMESTAMP, server_default=func.now())
    total_amount = Column(Float, nullable=False)
    delivery_method = Column(Enum('Pickup', 'Delivery', name='delivery_method'), default='Delivery')
    status = Column(Enum('Pending', 'Paid', 'Processing', 'Shipped', 'Delivered', 'Completed', 'Cancelled', name='order_status'), default='Pending')

    @staticmethod
    def generate_order_id():
        return f"OR_{uuid.uuid4().hex[:8]}"

    @staticmethod
    def create_unique_order_id():
        while True:
            order_id = Order.generate_order_id()
            if not Order.query.filter_by(order_id=order_id).first():
                return order_id

    def to_dict(self):
        return {
            'order_id': self.order_id,
            'consumer_id': self.consumer_id,
            'seller_id': self.seller_id,
            'store_id': self.store_id,
            'delivery_method': self.delivery_method,
            'status': self.status,
            'total_amount': self.total_amount,
        }

class OrderItem(db.Model):
    __tablename__ = 'OrderItems'

    order_item_id = Column(String(50), primary_key=True)
    order_id = Column(String(50), ForeignKey('Orders.order_id'), nullable=False)
    product_id = Column(String(50), ForeignKey('Products.product_id'), nullable=False)
    quantity = Column(Integer, nullable=False)
    price = Column(Float, nullable=False)

    @staticmethod
    def generate_item_id():
        return f"OI_{uuid.uuid4().hex[:8]}"

    def to_dict(self):
        return {
            'order_item_id': self.order_item_id,
            'order_id': self.order_id,
            'product_id': self.product_id,
            'quantity': self.quantity,
            'price': self.price
        }

