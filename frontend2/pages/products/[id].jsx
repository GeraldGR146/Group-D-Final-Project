import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import ProductService from '../../components/Services/ProductService';
import ReviewService from '../../components/Services/ReviewService';
import ReviewForm from '../../components/reviewForm';
import ReviewList from '../../components/reviewList';
import axios from 'axios';

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
        const token = sessionStorage.getItem('access_token');
        if (!token) {
            router.push('/login'); // Redirect to login if token is not available
            return;
        }

        const newReview = await reviewService.createReview(id, rating, comment, token);
        setReviews([newReview, ...reviews]);
    };

    const addToCart = async (product) => {
        const token = sessionStorage.getItem('access_token'); // Retrieve the token from sessionStorage
        if (!token) {
            router.push('/login'); // Redirect to login if token is not available
            return;
        }

        const cartItem = {
            product_id: product.id,
            quantity: 1
        };

        try {
            const response = await axios.post(
                'http://127.0.0.1:5000/cart/item',
                cartItem,
                {
                    headers: {
                        Authorization: `Bearer ${token}`, // Include the token in the Authorization header
                        'Content-Type': 'application/json'
                    }
                }
            );
            console.log('Item added to cart:', response.data);
            sessionStorage.removeItem('product_id'); // Remove product_id from session storage
            router.push('/shopping_cart'); // Redirect to shopping cart
        } catch (error) {
            console.error("Failed to add item to cart:", error);
        }
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-col md:flex-row">
                <img src={product.image_url} alt={product.name} className="w-full md:w-1/2 h-64 object-cover rounded-lg" />
                <div className="md:ml-4">
                    <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                    <p className="text-gray-700 mb-4">{product.description}</p>
                    <p className="text-gray-900 font-semibold text-xl mb-4">Rp {product.price}</p>
                    <p className="text-gray-700">Available Quantity: {product.quantity}</p>
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