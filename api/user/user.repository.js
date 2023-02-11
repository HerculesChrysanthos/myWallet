const User = require('./user.model');

async function register(user) {
  await User.create(user);
}

async function findUser(email) {
  return User.findOne({ email });
}

async function getUserId(email) {
  return User.findOne({ email }, { _id: 1 });
}

module.exports = {
  register,
  findUser,
  getUserId,
};
