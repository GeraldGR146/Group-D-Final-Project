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

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? banners.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden">
            <div
                className="flex transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {banners.map((banner, index) => (
                    <div key={index} className="min-w-full h-full">
                        <img
                            src={banner}
                            alt={`Banner ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <button
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                onClick={prevSlide}
                aria-label="Previous Slide"
            >
                &#10094;
            </button>
            <button
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                onClick={nextSlide}
                aria-label="Next Slide"
            >
                &#10095;
            </button>

            {/* Dots Navigation */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 pb-2">
                {banners.map((_, index) => (
                    <div
                        key={index}
                        className={`w-3 h-3 rounded-full cursor-pointer ${
                            currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'
                        }`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;

