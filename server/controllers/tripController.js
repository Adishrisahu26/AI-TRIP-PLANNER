const Trip = require("../models/Trip");

// Create Trip
exports.createTrip = async (req, res) => {
  try {
    const { destination, source, startDate, endDate, budget, interests, itinerary } = req.body;

    const trip = await Trip.create({
      userId: req.userId,
      destination,
      source,
      startDate,
      endDate,
      budget,
      interests,
      itinerary,
    });

    res.status(201).json({
      message: "Trip created successfully",
      trip,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get All Trips for User
exports.getAllTrips = async (req, res) => {
  try {
    const trips = await Trip.find({ userId: req.userId }).sort({ createdAt: -1 });

    res.json({
      message: "Trips fetched successfully",
      trips,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get Single Trip
exports.getTrip = async (req, res) => {
  try {
    const trip = await Trip.findById(req.params.id);

    if (!trip) {
      return res.status(404).json({ message: "Trip not found" });
    }

    if (trip.userId.toString() !== req.userId) {
      return res.status(403).json({ message: "Not authorized" });
    }

    res.json({
      message: "Trip fetched successfully",
      trip,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update Trip
exports.updateTrip = async (req, res) => {
  try {
    let trip = await Trip.findById(req.params.id);

    if (!trip) {
      return res.status(404).json({ message: "Trip not found" });
    }

    if (trip.userId.toString() !== req.userId) {
      return res.status(403).json({ message: "Not authorized" });
    }

    trip = await Trip.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.json({
      message: "Trip updated successfully",
      trip,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete Trip
exports.deleteTrip = async (req, res) => {
  try {
    const trip = await Trip.findById(req.params.id);

    if (!trip) {
      return res.status(404).json({ message: "Trip not found" });
    }

    if (trip.userId.toString() !== req.userId) {
      return res.status(403).json({ message: "Not authorized" });
    }

    await Trip.findByIdAndDelete(req.params.id);

    res.json({
      message: "Trip deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
