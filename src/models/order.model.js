const { ORDER_STATUS } = require('../constants');

class OrderModel {
  constructor(properties) {
    const {
      id,
      products,
      totalPrice,
    } = properties;

    this.id = id;
    this.totalPrice = totalPrice;
    this.status = ORDER_STATUS.open;
    this.products = products;
  }

  // is used for getting the certain data
  getOrder() {
    return {
      id: this.id,
      totalPrice: this.totalPrice,
      products: this.products.map(item => ({
        name: item.name,
        price: item.price,
      })),
    };
  }
}

module.exports = {
  OrderModel,
};
