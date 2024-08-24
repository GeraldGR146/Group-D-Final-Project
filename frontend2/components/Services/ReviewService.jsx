import Review from "../models/review";
class ReviewService {
    static async createReview(product_Id, rating, comment, token) {
        const response = await fetch(`http://127.0.0.1:5000/products/${product_Id}/reviews`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ rating, comment })
        });
        const data = await response.json();
        return Review.fromJson(data);
    }
    static async getReviews(product_Id, token) {
        const response = await fetch(`http://127.0.0.1:5000/products/${product_Id}/reviews`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const data = await response.json();
        return data.map(Review.fromJson);
    }
    static async updateReview(product_Id, review_Id, rating, comment, token) {
        const response = await fetch(`http://127.0.0.1:5000/products/${product_Id}/reviews/${review_Id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ rating, comment })
        });
        const data = await response.json();
        return Review.fromJson(data);
    }
    static async deleteReview(product_Id, review_Id, token) {
        const response = await fetch(`http://127.0.0.1:5000/products/${product_Id}/reviews/${review_Id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const data = await response.json();
        return data; // Assuming the response is a success message or similar.
    }
}
export default ReviewService;