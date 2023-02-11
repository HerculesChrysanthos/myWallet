const Transaction = require('./transaction.model');

async function createTransaction(transaction) {
  await Transaction.create(transaction);
}

module.exports = {
  createTransaction,
};
