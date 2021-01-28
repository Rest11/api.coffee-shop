const calculateTotalPrice = products => products.reduce((sum, item) => sum + item.price, 0);

module.exports = {
  calculateTotalPrice,
};
