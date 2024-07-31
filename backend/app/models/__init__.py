from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

from app.models.user import User
from app.models.store import Store
from app.models.product import Product
from app.models.order import Order, OrderItem
from app.models.review import Review
from app.models.promotion import Promotion
from app.models.wishlist import Wishlist
from app.models.referral import Referral
