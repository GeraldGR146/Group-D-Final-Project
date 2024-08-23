import React from 'react';
import CategoryCard from '../../components/Card/CategoryCard';
import BestSeller from './BestSeller';
import Carousel from './Carousel';
import HowToOrder from './HowToOrder';


const Category = () => {
    return (
        <section>
            <Carousel/> 
            <div className="container mx-auto p-4">
                <div className="flex justify-center my-8">
                    <h2 className="text-2xl font-bold">Category</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <CategoryCard title="Discount Product 1" content="Description of Discount product 1" />
                    <CategoryCard title="Discount Product 2" content="Description of Discount product 2" />
                    <CategoryCard title="Discount Product 3" content="Description of Discount product 3" />
                    <CategoryCard title="Discount Product 4" content="Description of Discount product 4" />
                    
                </div>
                <BestSeller/>
                <HowToOrder/>
                
            </div>
        </section>
    );
};

export default Category;