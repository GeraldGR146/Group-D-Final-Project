import React from 'react';
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
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Checkout</h1>
        <ProductComponent product={product} />
        <VoucherComponent voucher={voucher} totalPrice={totalPrice} />
        <p className="mt-4">Metode Pembayaran: {paymentMethod}</p>
        <button
          onClick={this.handleOrder}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
        >
          Order
        </button>
      </div>
    );
  }
}

export default Checkout;