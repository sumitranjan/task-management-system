const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");
const teamRoutes = require("./routes/teamRoutes");
const errorHandler = require("./middlewares/errorHandler");

connectDB();

const app = express();
app.use(express.json());
// Routes
app.use("/api/auth", authRoutes);
app.use("/api", taskRoutes);
app.use("/api", teamRoutes);

// Error handler
app.use(errorHandler);

module.exports = app;
