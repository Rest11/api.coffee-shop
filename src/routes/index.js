const productRouter = require('./product-route');
const orderRouter = require('./order-route');

module.exports = router => {
  router.use(
    '/product',
    productRouter,
  );
  router.use(
    '/order',
    orderRouter,
  );
};
