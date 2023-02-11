const transactionRepository = require('./transaction.repository');
const userService = require('../user/user.service');

async function createTransaction(transaction, user) {
  const userId = await userService.getUserId(user.email);

  transaction.userId = userId;

  await transactionRepository.createTransaction(transaction);
}

module.exports = {
  createTransaction,
};
