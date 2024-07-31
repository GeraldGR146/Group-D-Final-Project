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
    <div>
      <p>Diskon: {voucher.discount}%</p>
      <p>Harga Setelah Diskon: Rp {discountedPrice}</p>
    </div>
  );
};

export { Voucher, VoucherComponent };