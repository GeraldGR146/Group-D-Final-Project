export default class Product {
    constructor(id, name, description, price, quantity, product_type, imageUrl) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
        this.product_type = product_type;
        this.image_url = imageUrl;
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