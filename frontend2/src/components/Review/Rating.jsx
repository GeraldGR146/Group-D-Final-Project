import React from 'react';

class Rating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
    };
  }

  handleRating = (rate) => {
    this.setState({ rating: rate });
  };

  render() {
    return (
      <div>
        <p>Rating:</p>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => this.handleRating(star)}
            style={{ cursor: 'pointer', color: star <= this.state.rating ? 'gold' : 'grey' }}
          >
            ★
          </span>
        ))}
      </div>
    );
  }
}

export default Rating;