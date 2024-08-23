from __future__ import with_statement
import logging
from alembic import context
from sqlalchemy import engine_from_config, pool
from dotenv import load_dotenv
import os
from app.models import db
from mysql_connector import get_session

# Load environment variables from .env file
load_dotenv()

# Get the database URL from environment variables
database_url = (
    f"mysql+mysqlconnector://{os.getenv('DB_USERNAME')}:{os.getenv('DB_PASSWORD')}@{os.getenv('DB_HOST')}/{os.getenv('DB_DATABASE')}"
)

# Configure Alembic logging
logger = logging.getLogger('alembic.runtime.migration')
logger.setLevel(logging.INFO)

# Set up Alembic configuration
config = context.config
config.set_main_option('sqlalchemy.url', database_url)

# Use db.metadata from your setup for target_metadata
target_metadata = db.metadata

def run_migrations_offline():
    url = config.get_main_option('sqlalchemy.url')
    context.configure(url=url, target_metadata=target_metadata, literal_binds=True)
    
    with context.begin_transaction():
        context.run_migrations()

def run_migrations_online():
    connectable = engine_from_config(
        config.get_section(config.config_ini_section),
        prefix='sqlalchemy.',
        poolclass=pool.NullPool,
    )
    
    with connectable.connect() as connection:
        context.configure(connection=connection, target_metadata=target_metadata)
        
        with context.begin_transaction():
            context.run_migrations()

if context.is_offline_mode():
    run_migrations_offline()
else:
    run_migrations_online()

