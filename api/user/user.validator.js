const Joi = require('joi');

const registerSchema = Joi.object({
  username: Joi.string().lowercase().required(),
  email: Joi.string().email().lowercase().required(),
  password: Joi.string().min(4).max(15).required().label('password'),
  passwordConfirmation: Joi.any()
    .equal(Joi.ref('password'))
    .required()
    .label('passwordConfirmation')
    .messages({ 'any.only': '{{#label}} does not match' }),
});

const loginSchema = Joi.object({
  email: Joi.string().email().lowercase().required(),
  password: Joi.string().min(4).max(15).required(),
}).required();

module.exports = {
  registerSchema,
  loginSchema,
};
