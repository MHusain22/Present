const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Middleware to authenticate a user using JWT
exports.authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'No token provided' });

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);

    // Ensure the user exists in the database
    if (!req.user) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    next();
  } catch (err) {
    res.status(401).json({ message: 'Unauthorized, invalid token' });
  }
};

// Middleware to authorize based on user role
exports.roleMiddleware = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: 'Access denied' });
    }
    next();
  };
};
