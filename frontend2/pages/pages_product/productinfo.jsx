// //product detail

// import React from 'react';
// // import productServices from './productServices';
// // import Rating from '../Review/Rating';
// // import CommentForm from '../Review/CommentForm';
// import ReviewList from '../../components/reviewList'

// class ProductInfo extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       product: null,
//       reviews: [],
//       rating: 0,
//     };
//   }

//   // async componentDidMount() {
//   //   try {
//   //     const product = await ProductService.getProductById(this.props.productId);
//   //     this.setState({ product });
//   //   } catch (error) {
//   //     console.error('Error fetching product:', error);
//   //   }
//   // }

//   handleRatingChange = (rating) => {
//     this.setState({ rating });
//   };

//   handleReviewSubmit = (review) => {
//     this.setState((prevState) => ({
//       reviews: [...prevState.reviews, review],
//       rating: 0, // Reset rating after submission
//     }));
//   };

//   render() {
//     const { product } = this.state;
//     if (!product) {
//       return <div>Loading...</div>;
//     }

//     return (
//       <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
//         <div className="md:flex">
//           <div className="p-8">
//             <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{product.category}</div>
//             <h1 className="block mt-1 text-lg leading-tight font-medium text-black">{product.name}</h1>
//             <p className="mt-2 text-gray-500">{product.description}</p>
//             <div className="mt-4">
//               <span className="text-gray-500">Quantity: </span>{product.quantity}
//             </div>
//             <div className="mt-4">
//               <span className="text-gray-500">Price: </span>${product.price.toFixed(2)}
//             </div>
//             <div className="mt-4">
//               <span className="text-gray-500">Location: </span>{product.location}
//             </div>
//             <div className="mt-4">
//               <span>        
//                 {/* <Rating rating={this.state.rating} onRate={this.handleRatingChange} />
//                 <CommentForm rating={this.state.rating} onSubmit={this.handleReviewSubmit} /> */}
//                 <ReviewList reviews={this.state.reviews} />
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default ProductInfo;