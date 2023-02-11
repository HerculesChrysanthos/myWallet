const userService = require('./user.service');

async function register(req, res, next) {
  try {
    console.log(req.body);
    const token = await userService.register(req.body);

    res.status(201).json({ token });
  } catch (error) {
    if (error.toString().includes('duplicate key')) {
      // TODO: error handler
      error.status = 409;
      console.log(error);
      next(error);
    }
    next(error);
  }
}

async function login(req, res, next) {
  try {
    const token = await userService.login(req.body);

    res.status(201).json({ token });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  register,
  login,
};
