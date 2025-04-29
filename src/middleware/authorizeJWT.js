// Authorization middleware to check user roles
const authorizeRole = (requiredRole) => {
    return (req, res, next) => {
      // Check if the user role matches the required role
      if (req.userId && req.role === requiredRole) {
        // User is authorized, proceed to the next middleware/route handler
        next();
      } else {
        // If user is not authorized, return a 403 Forbidden response
        res.status(403).json({ message: 'Access Denied. You do not have permission to perform this action.' });
      }
    };
  };
  
  module.exports = authorizeRole;
  