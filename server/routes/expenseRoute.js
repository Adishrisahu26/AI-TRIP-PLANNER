const express = require("express");
const protect = require("../middleware/auth");
const {
  createExpense,
  getAllExpenses,
  getTripExpenses,
  updateExpense,
  deleteExpense,
} = require("../controllers/expenseController");

const router = express.Router();

router.post("/", protect, createExpense);
router.get("/", protect, getAllExpenses);
router.get("/trip/:tripId", protect, getTripExpenses);
router.put("/:id", protect, updateExpense);
router.delete("/:id", protect, deleteExpense);

module.exports = router;
