import React, {useEffect, useState} from 'react';
import WishlistCard from '../../components/Card/WishlistCard'
import axios from 'axios';

const WishlistPage = () => {
    const [wishlistItems, setWishlistItems] = useState([]);

    useEffect(() => {
        const fetchWishlist = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:5000/wishlist', {
                    headers: {
                        'Authorization': `Bearer ${sessionStorage.getItem('access_token')}`
                    }
                });
                setWishlistItems(response.data);
            } catch (error) {
                console.error('Error fetching wishlist:', error);
            }
        };

        fetchWishlist();
    }, []);
    
    // const wishlistItems = [
    //     {
    //         imgSrc: 'https://placehold.co/60x60',
    //         title: 'Blue Flower Print Crop Top',
    //         color: 'Yellow',
    //         quantity: 1,
    //         price: 30
    //     },
    //     {
    //         imgSrc: 'https://placehold.co/60x60',
    //         title: 'Yellow Flower Print Dress',
    //         color: 'Yellow',
    //         quantity: 1,
    //         price: 78.00
    //     },
    //     {
    //         imgSrc: 'https://placehold.co/60x60',
    //         title: 'White Hoodie Long Sleeve',
    //         color: 'White',
    //         quantity: 1,
    //         price: 134.00
    //     },
    //     {
    //         imgSrc: 'https://placehold.co/60x60',
    //         title: 'Brown Men’s Long Sleeve T-shirt',
    //         color: 'Brown',
    //         quantity: 1,
    //         price: 93.00
    //     }
    // ];

    return (
        <div className="bg-gray-100 flex justify-center items-center min-h-screen">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Wishlist</h2>
                <div className="space-y-4">
                    {wishlistItems.map(item => (
                        <WishlistCard key={item.title} {...item} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default WishlistPage;