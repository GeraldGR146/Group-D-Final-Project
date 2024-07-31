from . import db

class Wishlist(db.Model):
    __tablename__ = 'Wishlist'
    wishlist_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    consumer_id = db.Column(db.Integer, db.ForeignKey('Users.user_id'), nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey('Products.product_id'), nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
