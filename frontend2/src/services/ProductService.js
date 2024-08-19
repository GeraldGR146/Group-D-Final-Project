// services/ProductService.js
import Product from '../models/Product';

class ProductService {
    static async fetchAllProducts() {
        const response = await fetch('http://127.0.0.1:5000/products');
        const data = await response.json();
        return data.map(Product.fromJson);
    }

    static async fetchProductById(id) {
        const response = await fetch(`http://127.0.0.1:5000/products/${id}`);
        const data = await response.json();
        return Product.fromJson(data);
    }
}

export default ProductService;
