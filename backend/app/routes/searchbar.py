from sqlalchemy import create_engine, declarative_base
from sqlalchemy.orm import sessionmaker

DATABASE_URI = 'sqlite:///example.db'  # Sesuaikan dengan database Anda
Base = declarative_base()

def get_db_connection():
    engine = create_engine(DATABASE_URI)
    Base.metadata.create_all(engine)
    return engine