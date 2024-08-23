"""Initial migration

Revision ID: a034cfd0943f
Revises: 
Create Date: 2024-08-12

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import mysql

# revision identifiers, used by Alembic.
revision: str = 'a034cfd0943f'
down_revision: Union[str, None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('Users',
    sa.Column('user_id', sa.String(length=50), nullable=False),
    sa.Column('username', sa.String(length=50), nullable=False),
    sa.Column('email', sa.String(length=100), nullable=False),
    sa.Column('password_hash', sa.String(length=255), nullable=False),
    sa.Column('role', sa.Enum('consumer', 'seller'), nullable=False),
    sa.Column('created_at', sa.TIMESTAMP(), server_default=sa.text('now()'), nullable=True),
    sa.PrimaryKeyConstraint('user_id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('Carts',
    sa.Column('cart_id', sa.String(length=50), nullable=False),
    sa.Column('consumer_id', sa.String(length=50), nullable=False),
    sa.Column('created_at', sa.DateTime(), nullable=True),
    sa.ForeignKeyConstraint(['consumer_id'], ['Users.user_id']),
    sa.PrimaryKeyConstraint('cart_id')
    )
    op.create_table('Referrals',
    sa.Column('referral_id', sa.String(length=50), nullable=False),
    sa.Column('referrer_id', sa.String(length=50), nullable=False),
    sa.Column('referred_id', sa.String(length=50), nullable=False),
    sa.Column('code', sa.String(length=50), nullable=False),
    sa.Column('created_at', sa.TIMESTAMP(), server_default=sa.text('now()'), nullable=True),
    sa.ForeignKeyConstraint(['referred_id'], ['Users.user_id']),
    sa.ForeignKeyConstraint(['referrer_id'], ['Users.user_id']),
    sa.PrimaryKeyConstraint('referral_id')
    )
    op.create_table('Stores',
    sa.Column('store_id', sa.String(length=50), nullable=False),
    sa.Column('seller_id', sa.String(length=50), nullable=False),
    sa.Column('store_name', sa.String(length=100), nullable=False),
    sa.Column('location', sa.String(length=255), nullable=False),
    sa.Column('description', sa.Text(), nullable=True),
    sa.Column('created_at', sa.TIMESTAMP(), server_default=sa.text('now()'), nullable=True),
    sa.ForeignKeyConstraint(['seller_id'], ['Users.user_id']),
    sa.PrimaryKeyConstraint('store_id')
    )
    op.create_table('Orders',
    sa.Column('order_id', sa.String(length=50), nullable=False),
    sa.Column('consumer_id', sa.String(length=50), nullable=False),
    sa.Column('seller_id', sa.String(length=50), nullable=False),
    sa.Column('store_id', sa.String(length=50), nullable=False),
    sa.Column('cart_id', sa.String(length=50), nullable=False),
    sa.Column('order_date', sa.TIMESTAMP(), server_default=sa.text('now()'), nullable=True),
    sa.Column('total_amount', sa.Float(), nullable=False),
    sa.Column('delivery_method', sa.Enum('Pickup', 'Delivery', name='delivery_method'), nullable=True),
    sa.Column('status', sa.Enum('Pending', 'Paid', 'Processing', 'Shipped', 'Delivered', 'Completed', 'Cancelled', name='order_status'), nullable=True),
    sa.ForeignKeyConstraint(['cart_id'], ['Carts.cart_id']),
    sa.ForeignKeyConstraint(['consumer_id'], ['Users.user_id']),
    sa.ForeignKeyConstraint(['seller_id'], ['Users.user_id']),
    sa.ForeignKeyConstraint(['store_id'], ['Stores.store_id']),
    sa.PrimaryKeyConstraint('order_id')
    )
    op.create_table('Products',
    sa.Column('product_id', sa.String(length=50), nullable=False),
    sa.Column('seller_id', sa.String(length=50), nullable=False),
    sa.Column('store_id', sa.String(length=50), nullable=False),
    sa.Column('name', sa.String(length=100), nullable=False),
    sa.Column('description', sa.Text(), nullable=True),
    sa.Column('price', sa.DECIMAL(precision=10, scale=2), nullable=False),
    sa.Column('quantity', sa.Integer(), nullable=False),
    sa.Column('product_type', sa.Enum('standard', 'premium'), nullable=False),
    sa.Column('image_url', sa.String(length=255), nullable=True),
    sa.Column('created_at', sa.TIMESTAMP(), server_default=sa.text('now()'), nullable=True),
    sa.ForeignKeyConstraint(['seller_id'], ['Users.user_id']),
    sa.ForeignKeyConstraint(['store_id'], ['Stores.store_id']),
    sa.PrimaryKeyConstraint('product_id')
    )
    op.create_table('Promotions',
    sa.Column('promotion_id', sa.String(length=50), nullable=False),
    sa.Column('store_id', sa.String(length=50), nullable=False),
    sa.Column('seller_id', sa.String(length=50), nullable=False),
    sa.Column('code', sa.String(length=50), nullable=False),
    sa.Column('discount_percentage', sa.DECIMAL(precision=5, scale=2), nullable=False),
    sa.Column('start_date', sa.Date(), nullable=False),
    sa.Column('end_date', sa.Date(), nullable=False),
    sa.ForeignKeyConstraint(['seller_id'], ['Users.user_id']),
    sa.ForeignKeyConstraint(['store_id'], ['Stores.store_id']),
    sa.PrimaryKeyConstraint('promotion_id'),
    sa.UniqueConstraint('code')
    )
    op.create_table(
    'CartItems',
    sa.Column('cart_item_id', sa.String(length=50), nullable=False),
    sa.Column('cart_id', sa.String(length=50), nullable=False),
    sa.Column('product_id', sa.String(length=50), nullable=False),
    sa.Column('product_name', sa.String(length=100), nullable=False),  # Add this column
    sa.Column('product_price', sa.Numeric(10, 2), nullable=False),  # Add this column
    sa.Column('product_image_url', sa.String(length=255), nullable=True),  # Add this column
    sa.Column('purchase_quantity', sa.Integer(), nullable=False),  # Updated column name
    sa.Column('added_at', sa.DateTime(), nullable=True, default=sa.text('CURRENT_TIMESTAMP')),
    sa.ForeignKeyConstraint(['cart_id'], ['Carts.cart_id'], ondelete='CASCADE'),
    sa.ForeignKeyConstraint(['product_id'], ['Products.product_id'], ondelete='CASCADE'),
    sa.PrimaryKeyConstraint('cart_item_id')
    )
    op.create_table('OrderItems',
    sa.Column('order_item_id', sa.String(length=50), nullable=False),
    sa.Column('order_id', sa.String(length=50), nullable=False),
    sa.Column('product_id', sa.String(length=50), nullable=False),
    sa.Column('quantity', sa.Integer(), nullable=False),
    sa.Column('price', sa.Float(), nullable=False),
    sa.ForeignKeyConstraint(['order_id'], ['Orders.order_id']),
    sa.ForeignKeyConstraint(['product_id'], ['Products.product_id']),
    sa.PrimaryKeyConstraint('order_item_id')
    )
    op.create_table('Reviews',
    sa.Column('review_id', sa.String(length=50), nullable=False),
    sa.Column('product_id', sa.String(length=50), nullable=False),
    sa.Column('consumer_id', sa.String(length=50), nullable=False),
    sa.Column('rating', sa.Integer(), nullable=True),
    sa.Column('comment', sa.Text(), nullable=True),
    sa.Column('created_at', sa.TIMESTAMP(), server_default=sa.text('now()'), nullable=True),
    sa.ForeignKeyConstraint(['consumer_id'], ['Users.user_id']),
    sa.ForeignKeyConstraint(['product_id'], ['Products.product_id']),
    sa.PrimaryKeyConstraint('review_id')
    )
    op.create_table('Wishlist',
    sa.Column('wishlist_id', sa.String(length=50), nullable=False),
    sa.Column('consumer_id', sa.String(length=50), nullable=False),
    sa.Column('product_id', sa.String(length=50), nullable=False),
    sa.Column('created_at', sa.TIMESTAMP(), server_default=sa.text('now()'), nullable=True),
    sa.ForeignKeyConstraint(['consumer_id'], ['Users.user_id']),
    sa.ForeignKeyConstraint(['product_id'], ['Products.product_id']),
    sa.PrimaryKeyConstraint('wishlist_id')
    )
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('Wishlist')
    op.drop_table('Reviews')
    op.drop_table('OrderItems')
    op.drop_table('CartItems')
    op.drop_table('Promotions')
    op.drop_table('Products')
    op.drop_table('Orders')
    op.drop_table('Stores')
    op.drop_table('Referrals')
    op.drop_table('Carts')
    op.drop_table('Users')
    # ### end Alembic commands ###
