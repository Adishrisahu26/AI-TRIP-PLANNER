const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./db");
const authRoutes = require("./routes/authRoute");
const tripRoutes = require("./routes/tripRoute");
const expenseRoutes = require("./routes/expenseRoute");
const memoryRoute = require("./routes/memoryRoute");

dotenv.config();

// Connect MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/trips", tripRoutes);
app.use("/api/expenses", expenseRoutes);
app.use("/api/memory", memoryRoute);

// Test Route
app.get("/", (req, res) => {
  res.send("GoJourney Backend Running...");
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});