const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  tripId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Trip",
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  description: String,
  amount: {
    type: Number,
    required: true,
  },
  category: String,
  paidBy: {
    type: String,
    required: true,
  },
  splitWith: [
    {
      name: String,
      amount: Number,
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Expense", expenseSchema);
