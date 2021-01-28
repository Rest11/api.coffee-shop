const Joi = require('joi');

const creationOrderSchema = Joi.object({
  productsId: Joi.array()
    .items(Joi.string())
    .min(0)
    .required(),
  discountsId: Joi.array()
    .items(Joi.string())
    .min(0)
    .required(),
});

module.exports = {
  creationOrderSchema,
};
