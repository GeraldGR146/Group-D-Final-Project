class ReviewService {
    constructor(baseURL) {
      this.baseURL = baseURL;
    }
  
    async createReview(productId, rating, comment, token) {
      const response = await fetch(`${this.baseURL}/products/${productId}/reviews`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: FormData.stringify({ rating, comment })
      });
      return response.json();
    }
  
    async getReviews(productId, token) {
      const response = await fetch(`${this.baseURL}/products/${productId}/reviews`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      return response.json();
    }
  
    async UpdateReviews(productId, token) {
        const response = await fetch(`${this.baseURL}/products/${productId}/reviews`, {
          method: 'PUT',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        return response.json();
      }

      async DeleteReviews(productId, token) {
        const response = await fetch(`${this.baseURL}/products/${productId}/reviews`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        return response.json();
      }
  }
  
  export default ReviewService;
  