const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userRepository = require('./user.repository');

function createToken(user) {
  return jwt.sign(
    { 'user._id': user._id, email: user.email },
    process.env.TOKEN_KEY,
    {
      expiresIn: '2h',
    }
  );
}

async function register(user) {
  const encryptedPassword = await bcrypt.hash(user.password, 10);
  user.password = encryptedPassword;

  await userRepository.register(user);

  return createToken(user);
}

async function login(user) {
  const existingUser = await userRepository.findUser(user.email);

  if (
    existingUser &&
    (await bcrypt.compare(user.password, existingUser.password))
  ) {
    console.log(`${process.env.TOKEN_KEY}`);

    return createToken(existingUser);
  }

  throw Error('user not found');
}

async function getUserId(email) {
  return userRepository.getUserId(email);
}

module.exports = {
  register,
  getUserId,
  login,
};
