class ProductModel {
  constructor(properties) {
    const {
      id,
      name,
      price,
      tax,
    } = properties;

    this.id = id;
    this.name = name;
    this.priceWithoutTax = Number(price);
    this.tax = Number(tax);
    this.price = this.priceWithoutTax + this.priceWithoutTax * this.tax;
  }

  // is used for getting the certain data
  getProduct() {
    return {
      id: this.id,
      name: this.name,
      priceWithoutTax: this.priceWithoutTax,
      tax: this.tax,
      price: this.price,
    };
  }
}

module.exports = {
  ProductModel,
};
