const { HTTP_STATUS_CODES } = require('../constants');
const {
  getAllProducts,
  getAllDiscountProducts,
} = require('../services/data.service');

const gettingAllProducts = (req, res) => {
  const result = getAllProducts();

  res.status(HTTP_STATUS_CODES.ok).send(result);
};

const gettingDiscountProducts = (req, res) => {
  const result = getAllDiscountProducts();

  res.status(HTTP_STATUS_CODES.ok).send(result);
};

module.exports = {
  gettingAllProducts,
  gettingDiscountProducts,
};
