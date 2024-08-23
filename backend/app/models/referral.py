from . import db
from sqlalchemy import Column, Integer, String, TIMESTAMP, ForeignKey
from sqlalchemy.sql import func
import uuid

class Referral(db.Model):
    __tablename__ = 'Referrals'

    referral_id = Column(String(50), primary_key=True)
    referrer_id = Column(String(50), ForeignKey('Users.user_id'), nullable=False)
    referred_id = Column(String(50), ForeignKey('Users.user_id'), nullable=False)
    code = Column(String(50), nullable=False)
    created_at = Column(TIMESTAMP, server_default=func.now())

    @staticmethod
    def generate_referral_id():
        return f"RF_{uuid.uuid4().hex[:8]}"