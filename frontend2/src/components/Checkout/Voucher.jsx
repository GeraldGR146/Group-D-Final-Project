import React from 'react';

class Voucher {
  constructor(discount) {
    this.discount = discount;
  }

  applyDiscount(price) {
    return price - (price * this.discount / 100);
  }
}

const VoucherComponent = ({ voucher, totalPrice }) => {
  const discountedPrice = voucher.applyDiscount(totalPrice);
  return (
    <div className="p-4 border rounded-lg shadow-lg mt-4">
      <p>Diskon: {voucher.discount}%</p>
      <p>Harga Setelah Diskon: Rp {discountedPrice}</p>
    </div>
  );
};

export { Voucher, VoucherComponent };