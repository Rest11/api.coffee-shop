const { ProductModel } = require('./product.model');

class DiscountProductModel extends ProductModel {
  // is used for getting the certain data
  getDiscountProduct(discount) {
    return {
      id: this.id,
      name: this.name,
      discount,
      price: this.price - this.price * Number(discount),
    };
  }
}

module.exports = {
  DiscountProductModel,
};
