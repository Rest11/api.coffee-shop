const router = require('express').Router();
const routerHandler = require('../handler-wrapper');
const {
  gettingAllProducts,
  gettingDiscountProducts,
} = require('../../controllers/product.controller');

router.get(
  '/all',
  routerHandler(gettingAllProducts),
);

router.get(
  '/discounts',
  routerHandler(gettingDiscountProducts),
);

module.exports = router;
