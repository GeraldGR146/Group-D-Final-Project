from . import db
from sqlalchemy import Column, Integer, String, DECIMAL, Date, ForeignKey, CheckConstraint
from sqlalchemy.orm import relationship

class Promotion(db.Model):
    __tablename__ = 'Promotions'

    promotion_id = Column(Integer, primary_key=True, autoincrement=True)
    seller_id = Column(Integer, ForeignKey('Users.user_id'), nullable=False)
    code = Column(String(50), nullable=False, unique=True)
    discount_percentage = Column(DECIMAL(5, 2), CheckConstraint('discount_percentage BETWEEN 0 AND 100'))
    start_date = Column(Date, nullable=False)
    end_date = Column(Date, nullable=False)