// components/ReviewList.jsx

import React from 'react';

const ReviewList = ({ reviews }) => {
    return (
        <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
            {reviews.length === 0 ? (
                <p>No reviews yet.</p>
            ) : (
                reviews.map((review) => (
                    <div key={review.id} className="border-b pb-4 mb-4">
                        <div className="flex items-center mb-2">
                            <span className="text-yellow-500">{'★'.repeat(review.rating)}</span>
                            <span className="ml-2 text-gray-600">{new Date(review.createdAt).toLocaleDateString()}</span>
                        </div>
                        <p>{review.comment}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default ReviewList;