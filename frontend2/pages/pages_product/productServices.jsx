class ProductService {
    constructor(baseUrl) {
      this.baseUrl = baseUrl;
    }
      
    async getAllProducts() {
      const response = await fetch(`http://127.0.0.1:5000/products`, {
        method: 'GET',
        // headers: {
        //   'Authorization': `Bearer ${localStorage.getItem('token')}`,
        // },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      return response.json();
    }
  
    async getProductById(productId) {
      const response = await fetch(`http://127.0.0.1:5000/products/${productId}`, {
        method: 'GET',
        // headers: {
        //   'Authorization': `Bearer ${localStorage.getItem('token')}`,
        // },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch product');
      }
      return response.json();
    }
  
    async createProduct(productData) {
      const response = await fetch(`http://127.0.0.1:5000/stores/${productData.store_id}/products`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.errors.join(', '));
      }
      return response.json();
    }
  
    async updateProduct(productId, productData) {
      const response = await fetch(`http://127.0.0.1:5000/products/${productId}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.errors.join(', '));
      }
      return response.json();
    }
  
    async deleteProduct(productId) {
      const response = await fetch(`http://127.0.0.1:5000/products/${productId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      if (!response.ok) {
        throw new Error('Failed to delete product');
      }
      return response.json();
    }
  }
  
  export default new ProductService('http://localhost:5000/api');