from . import db
from sqlalchemy import Column, Integer, String, Date, Text, TIMESTAMP, ForeignKey
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship

class Store(db.Model):
    __tablename__ = 'Stores'

    store_id = Column(Integer, primary_key=True, autoincrement=True)
    seller_id = Column(Integer, ForeignKey('Users.user_id'), nullable=False)
    name = Column(String(100), nullable=False)
    location = Column(String(255), nullable=False)
    date = Column(Date, nullable=False)
    description = Column(Text)
    created_at = Column(TIMESTAMP, server_default=func.now())