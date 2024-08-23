import React from 'react';

const CartItem = ({ item }) => {
    return (
        <tr className="border-b">
        <td className="py-4">
            <div className="flex items-center space-x-4">
            <img src={item.image} alt={item.name} className="w-16 h-16 rounded-md"/>
            <div>
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-600">{item.color}</p>
                <p className="text-sm text-gray-600">{item.size}</p>
            </div>
            </div>
        </td>
        <td className="text-center">${item.price}</td>
        <td className="text-center">
            <div className="flex items-center justify-center space-x-2">
            <button className="px-2 py-1 border rounded">-</button>
            <span>{item.quantity}</span>
            <button className="px-2 py-1 border rounded">+</button>
            </div>
        </td>
        <td className="text-center">${item.subtotal.toFixed(2)}</td>
        </tr>
    );
};

export default CartItem;