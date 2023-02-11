const mongoose = require('mongoose');
const { TRANSACTION_TYPES, TRANSACTION_CATEGORIES } = require('../constants');

const transactionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    type: {
      type: String,
      required: true,
      enum: TRANSACTION_TYPES,
    },
    category: {
      type: String,
      required: true,
      enum: TRANSACTION_CATEGORIES,
    },
    amount: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Transaction', transactionSchema);
