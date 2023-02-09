const Joi = require('joi');

function validate(schema, property) {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    console.log(`validator ${JSON.stringify(req.body)}`);

    const valid = error == null;

    if (valid) {
      next();
    } else {
      const { details } = error;
      const message = details.map((i) => i.message).join(',');

      console.log('error', message);
      res.status(422).json({ error: message });
    }
  };
}

module.exports = {
  validate,
};
