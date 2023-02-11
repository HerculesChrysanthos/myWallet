const express = require('express');
const router = express.Router();
const { validate } = require('../middleware/validator');
const auth = require('../middleware/check-auth');
const userValidator = require('./user.validator');
const controller = require('./user.controller');

router.post(
  '/register',
  validate(userValidator.registerSchema),
  controller.register
);

router.post('/login', validate(userValidator.loginSchema), controller.login);

module.exports = router;
