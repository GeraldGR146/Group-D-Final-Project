// models/Review.js

class Review {
    constructor(id, productId, rating, comment, createdAt) {
        this.id = id;
        this.productId = productId;
        this.rating = rating;
        this.comment = comment;
        this.createdAt = createdAt;
    }
}

export default Review;
