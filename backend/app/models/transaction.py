from . import db
from sqlalchemy import Column, Integer, String, DECIMAL, Enum, TIMESTAMP, ForeignKey
from sqlalchemy.sql import func
import uuid


class Transaction(db.Model):
    __tablename__ = 'transactions'
    
    transaction_id = Column(String(50), primary_key=True)
    order_id = Column(String(50), ForeignKey('Orders.order_id'), nullable=False)
    transaction_date = Column(TIMESTAMP, server_default=func.now())
    amount = Column(DECIMAL(10, 2), nullable=False)
    payment_method = Column(Enum('credit_card', 'debit_card', 'paypal', 'cash', 'cod'), nullable=False)
    status = Column(Enum('Pending', 'Completed', 'Failed'), default= 'Pending')
    
    @staticmethod
    def generate_transaction_id():
        return f"T_{uuid.uuid4().hex[:8]}"