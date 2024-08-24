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
                <div className="flex items-center space-x-4">
                    <img src={product.product_image_url} alt={product.product_name} className="w-16 h-16 rounded-md"/>
                    <div>
                        <h2 className="text-lg font-semibold">{product.product_name}</h2>
                        {/* Assuming there are color and size properties */}
                        <p className="text-sm text-gray-600">{cart_item.color}</p>
                        <p className="text-sm text-gray-600">{cart_item.size}</p>
                    </div>
                </div>
            </td>
            <td className="text-center">Rp {price.toFixed(2)}</td>
            <td className="text-center">
                <div className="flex items-center justify-center space-x-2">
                    {/* <button className="px-2 py-1 border rounded">-</button> */}
                    <span>{quantity}</span>
                    {/* <button className="px-2 py-1 border rounded">+</button> */}
                </div>
            </td>
            <td className="text-center">Rp {subtotal}</td>
        </tr>
    );
};

export default CartItem;