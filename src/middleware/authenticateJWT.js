const jwt = require('jsonwebtoken');

const authenticateJWT = (req, res, next) => {
const token = req.header('Authorization')?.split(' ')[1]; 
  if (!token) {
    return res.status(403).json({ message: 'Access denied, no token provided' });
  }

  try {
   const decoded = jwt.verify(token, 'SushSecretKeyGift');

    req.userId = decoded.userId;  
    req.role = decoded.role;

    next();
  } catch (error) {
    res.status(400).json({ message: 'Invalid token' });
  }
};

module.exports = authenticateJWT;
