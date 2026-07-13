const Expense = require("../models/Expense");

// Create Expense
exports.createExpense = async (req, res) => {
  try {
    const { tripId, description, amount, category, paidBy, splitWith } = req.body;

    const expense = await Expense.create({
      tripId,
      userId: req.userId,
      description,
      amount,
      category,
      paidBy,
      splitWith: splitWith || [],
    });

    res.status(201).json({
      message: "Expense created successfully",
      expense,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get All Expenses for User
exports.getAllExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({ userId: req.userId }).sort({ createdAt: -1 });

    res.json({
      message: "Expenses fetched successfully",
      expenses,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get Trip Expenses
exports.getTripExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({
      tripId: req.params.tripId,
      userId: req.userId,
    }).sort({ createdAt: -1 });

    res.json({
      message: "Trip expenses fetched successfully",
      expenses,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update Expense
exports.updateExpense = async (req, res) => {
  try {
    let expense = await Expense.findById(req.params.id);

    if (!expense) {
      return res.status(404).json({ message: "Expense not found" });
    }

    if (expense.userId.toString() !== req.userId) {
      return res.status(403).json({ message: "Not authorized" });
    }

    expense = await Expense.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.json({
      message: "Expense updated successfully",
      expense,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete Expense
exports.deleteExpense = async (req, res) => {
  try {
    const expense = await Expense.findById(req.params.id);

    if (!expense) {
      return res.status(404).json({ message: "Expense not found" });
    }

    if (expense.userId.toString() !== req.userId) {
      return res.status(403).json({ message: "Not authorized" });
    }

    await Expense.findByIdAndDelete(req.params.id);

    res.json({
      message: "Expense deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
