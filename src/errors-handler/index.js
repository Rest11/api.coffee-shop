const { HTTP_STATUS_CODES } = require('../constants');

const errorHandler = (res, err) => {
  res.status(HTTP_STATUS_CODES.internalServerError).send(err.message);
  console.log(err);
};

module.exports = {
  errorHandler,
};
