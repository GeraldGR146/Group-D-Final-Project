import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
    };
  }

  handleCommentChange = (event) => {
    this.setState({ comment: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { rating } = this.props;
    const { comment } = this.state;

    if (rating > 0 && comment) {
      this.props.onSubmit({ rating, comment });
      this.setState({ comment: '' });
    } else {
      alert('Please provide a rating and a comment.');
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea
          value={this.state.comment}
          onChange={this.handleCommentChange}
          placeholder="Write your comment here..."
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default CommentForm;
