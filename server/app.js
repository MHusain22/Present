const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const attendanceRoutes = require("./routes/attendanceRouter");
const authRoutes = require("./routes/authRouter");
require("dotenv").config();
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json()); // Enable JSON parsing
app.use(bodyParser.urlencoded({ extended: false }));

// Environment Variables
const PORT = process.env.PORT || 5000;
const uri = process.env.MONGO_URI;

// Routes
app.use('/api/auth', authRoutes);

// Default Route
app.get("/", (req, res) => {
  res.send("Server working properly");
});

// Error Handling Middleware (this should be the last middleware)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: "An error occurred!" });
});

// Connect to MongoDB and Start the Server
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.log("Database Connection Error:", err.message));
