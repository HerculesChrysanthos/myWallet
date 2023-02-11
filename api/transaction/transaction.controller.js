const transactionService = require('./transaction.service');

async function createTransaction(req, res, next) {
  try {
    const transaction = req.body;
    const user = req.user;

    await transactionService.createTransaction(transaction, user);

    res.status(204).json({});
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createTransaction,
};
