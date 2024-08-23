import React from 'react';
import Link from 'next/link';
import SearchBar from '../components/SearchBar/SearchBar'
import BestSeller from './MainPage/BestSeller';
import Carousel from './MainPage/Carousel';
import Category from './MainPage/Category';
import HowToOrder from './MainPage/HowToOrder';


const HomePage = () => {
    return (
        <>
            <main>
                {/* <Carousel/> */}
                <Category/>
                {/* <BestSeller/> */}
                {/* <HowToOrder/> */}
            </main>
        </>
    );
};

export default HomePage;
