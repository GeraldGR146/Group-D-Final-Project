import React, { useState } from 'react';
import { Product, ProductComponent } from './Product';
import { Voucher, VoucherComponent } from './Voucher';

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: new Product('Nama Produk', 'Deskripsi Produk', 100000, 2),
      voucher: new Voucher(10),
      paymentMethod: 'Cash On Delivery',
    };
  }

  handleOrder = () => {
    alert('Pesanan Anda telah diterima!');
  }

  render() {
    const { product, voucher, paymentMethod } = this.state;
    const totalPrice = product.getTotalPrice();
    const discountedPrice = voucher.applyDiscount(totalPrice);

    return (
      <div>
        <h1>Checkout</h1>
        <ProductComponent product={product} />
        <VoucherComponent voucher={voucher} totalPrice={totalPrice} />
        <p>Metode Pembayaran: {paymentMethod}</p>
        <button onClick={this.handleOrder}>Order</button>
      </div>
    );
  }
}

export default Checkout;
