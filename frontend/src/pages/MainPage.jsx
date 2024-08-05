import React from 'react';
import BuyerCard from '../components/Card/BuyerCard';


const MainPage = () => {
    return (
        <body>
            <div className="container mx-auto p-4">
                <div className="flex justify-center my-8">
                    <h2 className="text-2xl font-bold">Diskon Hari Ini</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                    <BuyerCard title="Discount Product 1" content="Description of Discount product 1" />
                    <BuyerCard title="Discount Product 2" content="Description of Discount product 2" />
                    <BuyerCard title="Discount Product 3" content="Description of Discount product 3" />
                    <BuyerCard title="Discount Product 4" content="Description of Discount product 4" />
                    <BuyerCard title="Discount Product 5" content="Description of Discount product 5" />
                </div>
                <section className="container mx-auto p-4">
                    <div className="flex justify-center my-8">
                        <h2 className="text-2xl font-bold">Cara Pemesanan</h2>
                    </div>
                    <div>
                        <ul>
                            <li>Step 1: Pilih product yang kamu inginkan.</li>
                            <li>Step 2: Tambahkan ke dalam keranjang belanja.</li>
                            <li>Step 3: Click "Order Now" untuk melanjutkan proses pemesanan.</li>
                        </ul>
                    </div>
                    
                </section>
            </div>
        </body>
    );
};

export default MainPage;