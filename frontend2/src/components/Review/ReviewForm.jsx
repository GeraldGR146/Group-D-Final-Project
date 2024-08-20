// components/ReviewForm.jsx

import React, { useState } from 'react';

const ReviewForm = ({ productId, onSubmit }) => {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ rating, comment });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center">
                <label className="text-gray-700 mr-4">Rating:</label>
                <select value={rating} onChange={(e) => setRating(e.target.value)} className="border rounded px-2 py-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <option key={star} value={star}>{star} Star{star > 1 && 's'}</option>
                    ))}
                </select>
            </div>
            <textarea 
                value={comment} 
                onChange={(e) => setComment(e.target.value)} 
                className="w-full border rounded p-2" 
                placeholder="Write your review..."
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit Review</button>
        </form>
    );
};

export default ReviewForm;
