const express = require("express");
const path = require("path");
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
const clientDistPath = path.join(__dirname, "..", "client", "dist");

// Middleware
app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/trips", tripRoutes);
app.use("/api/expenses", expenseRoutes);
app.use("/api/memory", memoryRoute);

// Serve built React frontend in production
app.use(express.static(clientDistPath));

// Test Route
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "GoJourney Backend Running..." });
});

// SPA fallback route (Express 5 compatible)
app.use((req, res) => {
  if (req.path.startsWith("/api")) {
    return res.status(404).json({ message: "API route not found" });
  }

  res.sendFile(path.join(clientDistPath, "index.html"));
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});