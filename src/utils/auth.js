const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

async function hashPassword (password) {
  console.log(password);
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  console.log(hashedPassword);
  return hashedPassword;
}

async function passwordMatch (enteredPassword, correctPassword) {
  return await bcrypt.compare(enteredPassword, correctPassword);
}

function generateToken (username) {
  return jwt.sign({ username }, process.env.JWT_SECRET, {
    expiresIn: '1h'
  });
}

module.exports = { hashPassword, passwordMatch, generateToken };
