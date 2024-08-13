import React from 'react';

class ReviewList extends React.Component {
  render() {
    return (
      <div>
        <h3>Reviews:</h3>
        {this.props.reviews.map((review, index) => (
          <div key={index}>
            <p>Rating: {review.rating} stars</p>
            <p>Comment: {review.comment}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default ReviewList;
