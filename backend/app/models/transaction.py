from . import db
from sqlalchemy import Column, Integer, DECIMAL, Enum, TIMESTAMP, ForeignKey
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship

class Transaction(db.Model):
    __tablename__ = 'Transactions'

    transaction_id = Column(Integer, primary_key=True, autoincrement=True)
    order_id = Column(Integer, ForeignKey('Orders.order_id'), nullable=False)
    transaction_date = Column(TIMESTAMP, server_default=func.now())
    amount = Column(DECIMAL(10, 2), nullable=False)
    payment_method = Column(Enum('credit_card', 'debit_card', 'paypal', 'cash', 'cod'), nullable=False)
    status = Column(Enum('pending', 'completed', 'failed'), nullable=False)