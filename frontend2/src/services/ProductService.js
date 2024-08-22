// services/ProductService.js
import Product from '../models/Product';

class ProductService {
    static async fetchAllProducts() {
        const response = await fetch('http://127.0.0.1:5000/products');
        const data = await response.json();
        return data.map(Product.fromJson);
    }

    static async fetchProductById(product_id) {
        const response = await fetch(`http://127.0.0.1:5000/products/${product_id}`);
        const data = await response.json();
        return Product.fromJson(data);
    }

    static async fetchProductFilter() {
        const response = await fetch(`http://127.0.0.1:5000/products/filter`);
        const data = await response.json();
        return data.map(Product.fromJson);
    }
}

export default ProductService;
