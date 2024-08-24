import React from 'react';

const CartItem = ({ item }) => {
    // Destructure the item and product details
    const { cart_item, product } = item;
    const price = product.product_price ? parseFloat(product.product_price) : 0;
    const quantity = cart_item.purchase_quantity || 0;
    const subtotal = (price * quantity).toFixed(2);

    return (
        <tr className="border-b">
            <td className="py-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                    <img src={product.product_image_url} alt={product.product_name} className="w-16 h-16 sm:w-20 sm:h-20 rounded-md object-cover"/>
                    <div className="text-left">
                        <h2 className="text-sm sm:text-lg font-semibold">{product.product_name}</h2>
                        {/* Assuming there are color and size properties */}
                        <p className="text-xs sm:text-sm text-gray-600">{cart_item.color}</p>
                        <p className="text-xs sm:text-sm text-gray-600">{cart_item.size}</p>
                    </div>
                </div>
            </td>
            <td className="text-center text-sm sm:text-base">Rp {price.toFixed(2)}</td>
            <td className="text-center text-sm sm:text-base">
                <div className="flex items-center justify-center space-x-2">
                    {/* <button className="px-2 py-1 border rounded">-</button> */}
                    <span>{quantity}</span>
                    {/* <button className="px-2 py-1 border rounded">+</button> */}
                </div>
            </td>
            <td className="text-center text-sm sm:text-base">Rp {subtotal}</td>
        </tr>
    );
};

export default CartItem;
