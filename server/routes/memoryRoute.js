const express = require("express");

const {
  createMemory,
  getMemories,
  deleteMemory,
} = require("../controllers/MemoryController");

const router = express.Router();

router.post("/", createMemory);
router.get("/", getMemories);
router.delete("/:id", deleteMemory);

module.exports = router;