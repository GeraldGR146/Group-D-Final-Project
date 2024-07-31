from . import db

class Referral(db.Model):
    __tablename__ = 'Referrals'
    referral_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    referrer_id = db.Column(db.Integer, db.ForeignKey('Users.user_id'), nullable=False)
    referred_id = db.Column(db.Integer, db.ForeignKey('Users.user_id'), nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
