// models/Product.js
export default class Product {
    constructor(id, name, description, price, quantity, productType, imageUrl) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
        this.productType = productType;
        this.imageUrl = imageUrl;
    }

    static fromJson(json) {
        return new Product(
            json.product_id,
            json.name,
            json.description,
            json.price,
            json.quantity,
            json.product_type,
            json.image_url
        );
    }
}