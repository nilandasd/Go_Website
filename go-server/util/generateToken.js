const jwt = require("jsonwebtoken");

const generateToken = (res, username, gameid) => {
  const expiration = 86400000;//One day
  const token = jwt.sign({ username, gameid }, process.env.SECRET, {
    expiresIn: "1d" ,
  });
  return res.cookie("authorization", token, {
    expires: new Date(Date.now() + expiration),
    secure: true,
    httpOnly: true,
  });
};

module.exports = generateToken;
