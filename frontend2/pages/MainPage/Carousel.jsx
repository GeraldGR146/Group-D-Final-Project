import React, { useState, useEffect } from 'react';

const Carousel = () => {
    const banners = [
        'https://via.placeholder.com/1600x600?text=Banner+1',
        'https://via.placeholder.com/1600x600?text=Banner+2',
        'https://via.placeholder.com/1600x600?text=Banner+3',
        'https://via.placeholder.com/1600x600?text=Banner+4'
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [banners.length]);

    return (
        <div className="relative w-full h-64 overflow-hidden">
        <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)`, width: `${banners.length * 100}%` }}
        >
            {banners.map((banner, index) => (
            <img
                key={index}
                src={banner}
                alt={`Banner ${index + 1}`}
                className="w-full h-full object-cover flex-shrink-0"
            />
            ))}
        </div>

        <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 pb-2">
            {banners.map((_, index) => (
            <div
                key={index}
                className={`w-3 h-3 rounded-full cursor-pointer ${currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'}`}
                onClick={() => setCurrentIndex(index)}
            />
            ))}
        </div>
        </div>
    );
};

export default Carousel;
