const TRANSACTION_TYPES = Object.freeze({
  INCOME: 'income',
  EXPENSE: 'expense',
});

const TRANSACTION_CATEGORIES = Object.freeze({
  // incomes
  PAYMENT: 'payment',
  // expenses
  FOOD: 'food',
  WITHDRAW: 'withdraw',
  TECHNOLOGY: 'technology',
  CLOTHES: 'clothes',
  CAR: 'car',
  GAS: 'gas',
});

module.exports = {
  TRANSACTION_TYPES,
};
