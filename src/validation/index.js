const { HTTP_STATUS_CODES } = require('../constants');

const validateValues = (schema, reqDataSource) => (req, res, next) => {
  const { error } = schema.validate(req[reqDataSource]);

  if (error) {
    res.status(HTTP_STATUS_CODES.badRequest).send(error.message);

    return;
  }

  next();
};

module.exports = {
  validateValues,
};
