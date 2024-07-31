from . import db

class Promotion(db.Model):
    __tablename__ = 'Promotions'
    promotion_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    seller_id = db.Column(db.Integer, db.ForeignKey('Users.user_id'), nullable=False)
    code = db.Column(db.String(50), nullable=False, unique=True)
    discount_percentage = db.Column(db.Numeric(5, 2), nullable=False)
    start_date = db.Column(db.Date, nullable=False)
    end_date = db.Column(db.Date, nullable=False)
