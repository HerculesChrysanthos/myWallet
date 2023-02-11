const Joi = require('joi');

const createTransactionSchema = Joi.object({
  type: Joi.string().valid('income', 'expense').required(), // TODO: use constants
  category: Joi.when('type', {
    is: 'expense',
    then: Joi.string().valid('food', 'withdraw', 'car', 'gas').required(),
  }).when('type', {
    is: 'income',
    then: Joi.string().valid('payment').required(),
  }),
  amount: Joi.number().required(),
});

module.exports = {
  createTransactionSchema,
};
