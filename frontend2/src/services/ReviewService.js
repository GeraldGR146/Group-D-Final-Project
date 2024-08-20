// services/ReviewService.js

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
            body: JSON.stringify({ rating, comment })
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

    async updateReview(productId, reviewId, rating, comment, token) {
        const response = await fetch(`${this.baseURL}/products/${productId}/reviews/${reviewId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ rating, comment })
        });
        return response.json();
    }

    async deleteReview(productId, reviewId, token) {
        const response = await fetch(`${this.baseURL}/products/${productId}/reviews/${reviewId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.json();
    }
}

export default ReviewService;
