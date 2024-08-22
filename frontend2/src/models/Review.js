// models/Review.js

class Review {
    constructor(id, productId, rating, comment, createdAt) {
        this.id = id;
        this.productId = productId;
        this.rating = rating;
        this.comment = comment;
        this.createdAt = createdAt;
    }

    static fromJson(json) {
        return new Review(
            json.id,
            json.productId,
            json.rating,
            json.comment,
            json.createdAt
        );
    }
}

export default Review;
