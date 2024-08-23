import React, { useState, useEffect } from 'react';

const Carousel = () => {
    const banners = [
        'assets/electronics.banner.jpeg',
        'assets/grocceries.banner.jpg',
        'assets/chair.banner.jpeg',
        'assets/wayang.banner.jpeg',
        'assets/download.banner.jpeg',
        'assets/download1.banner.jpeg',
        'assets/download2.banner.jpeg',
        'assets/groceries.banner.jpeg',
        'assets/images.banner.jpeg',
        'assets/images2.banner.jpeg'
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [banners.length]);

    return (
        <div className="relative w-full h-64 overflow-hidden">
        <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
            {banners.map((banner, index) => (
                    <div key={index} className="min-w-full h-full justify-center align-middle">
                        <img
                            src={banner}
                            alt={`Banner ${index + 1}`}
                            className="w-fit h-fit object-contain justify-center align-middle"
                        />
                    </div>
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
