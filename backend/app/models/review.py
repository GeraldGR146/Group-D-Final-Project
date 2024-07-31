from . import db

class Review(db.Model):
    __tablename__ = 'Reviews'
    review_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    product_id = db.Column(db.Integer, db.ForeignKey('Products.product_id'), nullable=False)
    consumer_id = db.Column(db.Integer, db.ForeignKey('Users.user_id'), nullable=False)
    rating = db.Column(db.Integer, nullable=False)
    comment = db.Column(db.Text)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
