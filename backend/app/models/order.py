from . import db

class Order(db.Model):
    __tablename__ = 'Orders'
    order_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    consumer_id = db.Column(db.Integer, db.ForeignKey('Users.user_id'), nullable=False)
    order_date = db.Column(db.DateTime, server_default=db.func.now())
    total_amount = db.Column(db.Numeric(10, 2), nullable=False)
    delivery_method = db.Column(db.Enum('pickup', 'delivery'), nullable=False)
    status = db.Column(db.Enum('pending', 'completed', 'cancelled'), nullable=False)

class OrderItem(db.Model):
    __tablename__ = 'OrderItems'
    order_item_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    order_id = db.Column(db.Integer, db.ForeignKey('Orders.order_id'), nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey('Products.product_id'), nullable=False)
    quantity = db.Column(db.Integer, nullable=False)
    price = db.Column(db.Numeric(10, 2), nullable=False)
