const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Helper function to generate a JWT
const generateToken = (user) => {
  return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: "1h", // Token expiry
  });
};

exports.signup = async (req, res) => {
  try {
    const { name, email, password, role, image } = req.body;

    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create a new user and save to the database
    const user = new User({
      name,
      email,
      password: hashedPassword,
      role,
    });

    await user.save();

    // Generate a JWT for the new user
    const token = generateToken(user);
    res.status(201).json({
      message: "User created successfully",
      token, // Send the token to the client
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    // Compare the provided password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    // Generate a JWT for the user
    const token = generateToken(user);

    res.status(200).json({
      message: "Logged in successfully",
      token, // Send the token to the client
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.logout = async (req, res) => {
  try {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    res.status(200).json({ message: "Logged out successfully" });
    navigate("/login");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
