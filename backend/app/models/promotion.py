from . import db
from sqlalchemy import Column, Integer, String, DECIMAL, Date, ForeignKey, CheckConstraint
import uuid

class Promotion(db.Model):
    __tablename__ = 'Promotions'

    promotion_id = Column(String(50), primary_key=True)
    store_id = Column(String(50), ForeignKey('Stores.store_id'), nullable=False)
    seller_id = Column(String(50), ForeignKey('Users.user_id'), nullable=False)
    code = Column(String(50), nullable=False, unique=True)
    discount_percentage = Column(DECIMAL(5, 2), nullable=False)
    start_date = Column(Date, nullable=False)
    end_date = Column(Date, nullable=False)
    
    @staticmethod
    def generate_promotion_id():
        return f"P_{uuid.uuid4().hex[:8]}"