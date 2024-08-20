// pages/products/[id].jsx

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import ProductService from '../../services/ProductService';
import ReviewService from '../../services/ReviewService';
import ReviewForm from '../../components/ReviewForm';
import ReviewList from '../../components/ReviewList';

const ProductDetail = () => {
    const [product, setProduct] = useState(null);
    const [reviews, setReviews] = useState([]);
    const router = useRouter();
    const { id } = router.query;
    const reviewService = new ReviewService('http://127.0.0.1:5000');

    useEffect(() => {
        if (id) {
            const fetchProduct = async () => {
                const fetchedProduct = await ProductService.fetchProductById(id);
                setProduct(fetchedProduct);
            };

            const fetchReviews = async () => {
                const fetchedReviews = await reviewService.getReviews(id);
                setReviews(fetchedReviews);
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

    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-col md:flex-row">
                <img src={product.imageUrl} alt={product.name} className="w-full md:w-1/2 h-64 object-cover rounded-lg" />
                <div className="md:ml-4">
                    <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                    <p className="text-gray-700 mb-4">{product.description}</p>
                    <p className="text-gray-900 font-semibold text-xl mb-4">${product.price}</p>
                    <p className="text-gray-700">Available Quantity: {product.quantity}</p>
                </div>
            </div>

            <ReviewForm productId={id} onSubmit={handleReviewSubmit} />
            <ReviewList reviews={reviews} />
        </div>
    );
};

export default ProductDetail;
