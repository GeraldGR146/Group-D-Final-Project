from . import db
from sqlalchemy import Column, Integer, String, TIMESTAMP, ForeignKey
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship

class Referral(db.Model):
    __tablename__ = 'Referrals'

    referral_id = Column(Integer, primary_key=True, autoincrement=True)
    referrer_id = Column(Integer, ForeignKey('Users.user_id'), nullable=False)
    referred_id = Column(Integer, ForeignKey('Users.user_id'), nullable=False)
    code = Column(String(50), nullable=False)
    created_at = Column(TIMESTAMP, server_default=func.now())