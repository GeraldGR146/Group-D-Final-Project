import React, { Component } from 'react';

class ProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      price: '',
      location: '',
      category: 'standard',
      quantity: 0,
      image: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleImageChange(event) {
    this.setState({ image: event.target.files[0] });
  }

  handleSubmit(event) {
    event.preventDefault();
    // Here you can handle the data submission to the database
    console.log(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
        </div>
        <div>
          <label>Description:</label>
          <input type="text" name="description" value={this.state.description} onChange={this.handleChange} />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" name="price" value={this.state.price} onChange={this.handleChange} />
        </div>
        <div>
          <label>Location:</label>
          <input type="text" name="location" value={this.state.location} onChange={this.handleChange} />
        </div>
        <div>
          <label>Category:</label>
          <select name="category" value={this.state.category} onChange={this.handleChange}>
            <option value="standard">Standard</option>
            <option value="premium">Premium</option>
          </select>
        </div>
        <div>
          <label>Available Quantity:</label>
          <input type="number" name="quantity" value={this.state.quantity} onChange={this.handleChange} />
        </div>
        <div>
          <label>Product Image:</label>
          <input type="file" onChange={this.handleImageChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default ProductForm;