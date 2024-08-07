from flask import Flask, render_template, request
from routes.searchbar import get_db_connection
from services.searchbar import search_products_and_stores

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/search', methods=['POST'])
def search():
    query = request.form['query']
    results = search_products_and_stores(query)
    return render_template('index.html', results=results)

if __name__ == '__main__':
    app.run(debug=True)
