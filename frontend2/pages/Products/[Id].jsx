import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import ProductService from '../../src/services/ProductService';
import ReviewService from '../../src/services/ReviewService';
import ReviewForm from '../../src/components/Review/ReviewForm';
import ReviewList from '../../src/components/Review/ReviewList';

const ProductDetail = () => {
    const [product, setProduct] = useState(null);
    const [reviews, setReviews] = useState([]);
    const router = useRouter();
    const { id } = router.query;
    const reviewService = new ReviewService('http://127.0.0.1:5000');

    useEffect(() => {
        if (id) {
            const fetchProduct = async () => {
                try {
                    const fetchedProduct = await ProductService.fetchProductById(id);
                    setProduct(fetchedProduct);
                } catch (error) {
                    console.error("Failed to fetch product:", error);
                }
            };

            const fetchReviews = async () => {
                try {
                    const fetchedReviews = await reviewService.getReviews(id);
                    setReviews(fetchedReviews);
                } catch (error) {
                    console.error("Failed to fetch reviews:", error);
                }
            };

            fetchProduct();
            fetchReviews();
        }
    }, [id]);

    const handleReviewSubmit = async ({ rating, comment }) => {
        const token = 'your-auth-token'; // Replace with actual token logic
        const newReview = await reviewService.createReview(id, rating, comment, token);
        setReviews([newReview, ...reviews]);
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    const addToCart = (product) => {
        const cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
        const existingProduct = cartItems.find(item => item.id === product.id);
    
        if (existingProduct) {
            existingProduct.quantity += 1;
            existingProduct.subtotal = existingProduct.quantity * product.price;
        } else {
            cartItems.push({
                ...product,
                quantity: 1,
                subtotal: product.price
            });
        }
    
        sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
    };

    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-col md:flex-row">
                <img src={product.image_url} alt={product.name} className="w-full md:w-1/2 h-64 object-cover rounded-lg" />
                <div className="md:ml-4">
                    <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                    <p className="text-gray-700 mb-4">{product.description}</p>
                    <p className="text-gray-900 font-semibold text-xl mb-4">${product.price}</p>
                    <p className="text-gray-700">Avaible Quantity: {product.quantity}</p>
                    <button onClick={() => addToCart(product)}
                        className="mt-4 bg-black text-white px-4 py-2 rounded"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>

            <ReviewForm productId={id} onSubmit={handleReviewSubmit} />
            <ReviewList reviews={reviews} />
        </div>
    );
};

export default ProductDetail;