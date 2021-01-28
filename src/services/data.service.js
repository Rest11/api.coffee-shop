const { ProductModel } = require('../models/product.model');
const { getDiscountProduct } = require('./discount.service');
const {
  productsData,
  discountsData,
} = require('../mock-data');

const getAllProducts = () => Object.values(productsData).map(
  item => new ProductModel(item).getProduct()
);

const getProduct = id => new ProductModel(productsData[id]).getProduct();

const getAllDiscountProducts = () => Object.values(discountsData).map(discount => ({
  id: discount.id,
  products: discount.products.map(item => getDiscountProduct(item)),
}));

const getProductsByDiscountId = id => discountsData[id].products.map(item => getDiscountProduct(item));

module.exports = {
  getAllProducts,
  getProduct,
  getAllDiscountProducts,
  getProductsByDiscountId,
};
