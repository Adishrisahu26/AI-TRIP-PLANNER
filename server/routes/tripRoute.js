const express = require("express");
const protect = require("../middleware/auth");
const {
  createTrip,
  getAllTrips,
  getTrip,
  updateTrip,
  deleteTrip,
} = require("../controllers/tripController");

const router = express.Router();

router.post("/", protect, createTrip);
router.get("/", protect, getAllTrips);
router.get("/:id", protect, getTrip);
router.put("/:id", protect, updateTrip);
router.delete("/:id", protect, deleteTrip);

module.exports = router;
