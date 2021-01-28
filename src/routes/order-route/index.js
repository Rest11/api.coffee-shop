const router = require('express').Router();
const routerHandler = require('../handler-wrapper');
const { REQUEST_DATA_SOURCE } = require('../../constants');
const { validateValues } = require('../../validation');
const { creationOrderSchema } = require('./validation-schemes');
const {
  creationOrder,
  confirmationOrder,
} = require('../../controllers/order.controller');

router.post(
  '/create',
  validateValues(creationOrderSchema, REQUEST_DATA_SOURCE.body),
  routerHandler(creationOrder),
);

router.put(
  '/confirm/:id',
  routerHandler(confirmationOrder),
);

module.exports = router;
