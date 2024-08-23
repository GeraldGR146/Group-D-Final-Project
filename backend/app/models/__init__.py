from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
db = SQLAlchemy()
bcrypt = Bcrypt()

from app.models.user import User
from app.models.store import Store
from app.models.product import Product
from app.models.order import Order, OrderItem
from app.models.review import Review
from app.models.promotion import Promotion
from app.models.wishlist import Wishlist
from app.models.referral import Referral
from app.models.transaction import Transaction
from app.models.cart import Cart, CartItem

def setup_relationships():
    User.stores = db.relationship('Store', back_populates='seller')
    User.products = db.relationship('Product', back_populates='seller')
    User.consumer_orders = db.relationship('Order', back_populates='consumer', foreign_keys='Order.consumer_id')
    User.seller_orders = db.relationship('Order', back_populates='seller', foreign_keys='Order.seller_id')
    User.reviews = db.relationship('Review', back_populates='consumer')
    User.promotions = db.relationship('Promotion', back_populates='seller')
    User.wishlists = db.relationship('Wishlist', back_populates='consumer')
    User.referrals_made = db.relationship('Referral', back_populates='referrer', foreign_keys='Referral.referrer_id')
    User.referrals_received = db.relationship('Referral', back_populates='referred', foreign_keys='Referral.referred_id')
    User.carts = db.relationship('Cart', back_populates='user')

    Store.seller = db.relationship('User', back_populates='stores')
    Store.products = db.relationship('Product', back_populates='store')
    Store.orders = db.relationship('Order', back_populates='store')
    Store.promotions = db.relationship('Promotion', back_populates='store')

    Product.seller = db.relationship('User', back_populates='products')
    Product.store = db.relationship('Store', back_populates='products')
    Product.order_items = db.relationship('OrderItem', back_populates='product')
    Product.reviews = db.relationship('Review', back_populates='product')
    Product.wishlists = db.relationship('Wishlist', back_populates='product')

    Order.consumer = db.relationship('User', foreign_keys=[Order.consumer_id], back_populates='consumer_orders')
    Order.seller = db.relationship('User', foreign_keys=[Order.seller_id], back_populates='seller_orders')
    Order.store = db.relationship('Store', back_populates='orders')
    Order.order_items = db.relationship('OrderItem', back_populates='order')
    Order.transaction = db.relationship('Transaction', back_populates='order', uselist=False)
    Order.cart = db.relationship('Cart', primaryjoin='Order.cart_id == Cart.cart_id', backref='orders')

    OrderItem.order = db.relationship('Order', back_populates='order_items')
    OrderItem.product = db.relationship('Product', back_populates='order_items')

    Transaction.order = db.relationship('Order', back_populates='transaction')

    Review.product = db.relationship('Product', back_populates='reviews')
    Review.consumer = db.relationship('User', back_populates='reviews')

    Promotion.seller = db.relationship('User', back_populates='promotions')
    Promotion.store = db.relationship("Store", back_populates="promotions")

    Wishlist.consumer = db.relationship('User', back_populates='wishlists')
    Wishlist.product = db.relationship('Product', back_populates='wishlists')

    Referral.referrer = db.relationship('User', foreign_keys=[Referral.referrer_id], back_populates='referrals_made')
    Referral.referred = db.relationship('User', foreign_keys=[Referral.referred_id], back_populates='referrals_received')

    Cart.user = db.relationship('User', back_populates='carts')
    Cart.items = db.relationship('CartItem', back_populates='cart', cascade='all, delete-orphan')

    CartItem.cart = db.relationship('Cart', back_populates='items')
    CartItem.product = db.relationship('Product')