const HTTP_STATUS_CODES = {
  ok: 200,
  badRequest: 400,
  notFound: 404,
  internalServerError: 500,
};

const REQUEST_DATA_SOURCE = {
  body: 'body',
};

const ORDER_STATUS = {
  open: 'open',
  close: 'close',
};

module.exports = {
  HTTP_STATUS_CODES,
  REQUEST_DATA_SOURCE,
  ORDER_STATUS,
};
