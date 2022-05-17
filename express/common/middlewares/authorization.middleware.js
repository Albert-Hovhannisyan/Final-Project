const UnauthorizedError = require('../errors/unauthorized.error');
const usersService = require('../../users/users.service');
const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
    if (req.url === '/users/register' || req.url === '/users/login') {
        return next();
    }

    const token = req.headers["x-access-token"];

    if(!token){
        return res.status(403).send("A token is required for authentication");
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
      } catch (err) {
        return res.status(401).send("Invalid Token");
      }
      
    next();
}