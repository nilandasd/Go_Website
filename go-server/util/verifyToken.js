require("dotenv").config();
const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  try {
    if (req.cookies === undefined || req.cookies.authorization === undefined) {
      res.status(401).json("You need to Login");
      return;
    }
    const token = req.cookies.authorization;
    const decrypt = jwt.verify(token, process.env.SECRET);
    req.username = decrypt.username;
    req.gameid = decrypt.gameid;
    next();
  } catch (err) {
    res.status(500).json(err.toString());
  }
};

module.exports = verifyToken;