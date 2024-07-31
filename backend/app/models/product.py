from . import db

class Product(db.Model):
    __tablename__ = 'Products'
    product_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    seller_id = db.Column(db.Integer, db.ForeignKey('Users.user_id'), nullable=False)
    store_id = db.Column(db.Integer, db.ForeignKey('Stores.store_id'), nullable=False)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text)
    price = db.Column(db.Numeric(10, 2), nullable=False)
    quantity = db.Column(db.Integer, nullable=False)
    product_type = db.Column(db.Enum('standard', 'premium'), nullable=False)
    image_url = db.Column(db.String(255))
    created_at = db.Column(db.DateTime, server_default=db.func.now())
