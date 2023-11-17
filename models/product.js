const db = require("../util/database");
const Cart = require("/cart");

module.exports = class Product {
  constructor(id, title, description, price, imageUrl) {
    this.id = id;
    (this.title = title), (this.description = description);
    this.price = price;
    this.imageUrl = imageUrl;
  }

  save() {}

  static deleteById(id) {}

  static fetchAll() {
    return db.execute("select * from products");
  }

  static findById(id) {}
};
