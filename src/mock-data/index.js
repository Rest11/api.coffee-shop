// This mock data is used as data from DB

const productsData = {
  '1p': {
    id: '1p',
    name: 'water',
    price: 2,
    tax: 0.1,
  },
  '2p': {
    id: '2p',
    name: 'sandwich',
    price: 3,
    tax: 0.1,
  },
  '3p': {
    id: '3p',
    name: 'beer',
    price: 5,
    tax: 0.2,
  },
  '4p': {
    id: '4p',
    name: 'cigarettes',
    price: 10,
    tax: 0.5,
  },
  '5p': {
    id: '5p',
    name: 'snacks',
    price: 1,
    tax: 0,
  },
};

const discountsData = {
  '1d': {
    id: '1d',
    products: [
      {
        id: '1p',
        discount: 0.05,
      },
      {
        id: '2p',
        discount: 0.1,
      },
    ],
  },
  '2d': {
    id: '2d',
    products: [
      {
        id: '3p',
        discount: 0.2,
      },
      {
        id: '5p',
        discount: 0.1,
      },
    ],
  },
  '3d': {
    id: '3d',
    products: [
      {
        id: '3p',
        discount: 0.2,
      },
      {
        id: '4p',
        discount: 0.3,
      },
      {
        id: '5p',
        discount: 0.1,
      },
    ],
  },
};

// is used to store created orders
const ordersData = {};

module.exports = {
  productsData,
  discountsData,
  ordersData,
};
