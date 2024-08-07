import React from 'react';
import Rating from './Rating';
import CommentForm from './CommentForm';
import ReviewList from './ReviewList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      rating: 0,
    };
  }

  handleRatingChange = (rating) => {
    this.setState({ rating });
  };

  handleReviewSubmit = (review) => {
    this.setState((prevState) => ({
      reviews: [...prevState.reviews, review],
      rating: 0, // Reset rating after submission
    }));
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