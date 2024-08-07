from sqlalchemy.orm import sessionmaker
from routes.searchbar import get_db_connection
from models import Product, Store
from validation.searchbar import validate_search_query

def search_products_and_stores(query):
    query = validate_search_query(query)
    session = sessionmaker(bind=get_db_connection())()
    products = session.query(Product).filter(Product.name.contains(query)).all()
    stores = session.query(Store).filter(Store.name.contains(query)).all()
    session.close()
    return {'products': products, 'stores': stores}
