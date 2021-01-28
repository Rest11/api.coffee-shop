const { DiscountProductModel } = require('../models/discount-product.model');
const {
  productsData,
} = require('../mock-data');

const getDiscountProduct = discountProduct => new DiscountProductModel(productsData[discountProduct.id])
  .getDiscountProduct(discountProduct.discount);

module.exports = {
  getDiscountProduct,
};
