import React from 'react';
import Rating from './Rating';
import CommentForm from './CommentForm';
import ReviewList from './ReviewList';
import ReviewService from '../services/ReviewService';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      rating: 0,
      productId: 'example_product_id', // Replace with actual product ID
      token: 'example_token', // Replace with actual token
    };

    this.reviewService = new ReviewService('http://localhost:5000'); // Adjust baseURL accordingly
  }

  componentDidMount() {
    this.fetchReviews();
  }

  handleRatingChange = (rating) => {
    this.setState({ rating });
  };

  handleReviewSubmit = async (comment) => {
    const { productId, rating, token } = this.state;
    const newReview = await this.reviewService.createReview(productId, rating, comment, token);
    this.setState((prevState) => ({
      reviews: [...prevState.reviews, newReview],
      rating: 0,
    }));
  };

  fetchReviews = async () => {
    const { productId, token } = this.state;
    const reviews = await this.reviewService.getReviews(productId, token);
    this.setState({ reviews });
  };

  render() {
    return (
      <div>
        <h1>Product Review</h1>
        <Rating rating={this.state.rating} onRate={this.handleRatingChange} />
        <CommentForm rating={this.state.rating} onSubmit={this.handleReviewSubmit} />
        <ReviewList reviews={this.state.reviews} />
      </div>
    );
  }
}

export default App;