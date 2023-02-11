const express = require('express');
const router = express.Router();
const { validate } = require('../middleware/validator');
const auth = require('../middleware/check-auth');
const validator = require('./transaction.validator');
const controller = require('./transaction.controller');

router.post(
  '/',
  auth,
  validate(validator.createTransactionSchema),
  controller.createTransaction
);

module.exports = router;
