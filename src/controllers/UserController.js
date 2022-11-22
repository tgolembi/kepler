const User = require('../models/User.js');
const { hashPassword, passwordMatch, generateToken } = require('../utils/auth.js');

async function authenticate (req, res) {
  const dbResponse = await User.findOne({
    where: { username: req.body.username }
  });
  console.log(dbResponse);
  const passwordMatches = await passwordMatch(req.body.password, dbResponse.password);
  if (passwordMatches) {
    return res.json({
      username: req.body.username,
      token: generateToken(req.body.username)
    });
  } else return res.json('User or Password incorrect!');
}

async function index (req, res) {
  const dbResponse = await User.findAll();
  return res.json(dbResponse);
}

async function store (req, res) {
  const userExists = await User.findOne({
    where: { username: req.body.username }
  });
  if (userExists) res.status(400).json('User already exists!');

  const hashedPassword = await hashPassword(req.body.password);
  const dbResponse = await User.create({
    username: req.body.username,
    password: hashedPassword
  });
  return res.json(dbResponse);
}

async function edit (req, res) {
  const hashedPassword = await hashPassword(req.body.password);
  const dbResponse = await User.update({
    password: hashedPassword
  }, {
    where: { id: req.params.id }
  });
  return res.json(dbResponse);
}

async function remove (req, res) {
  const dbResponse = await User.destroy({
    where: { id: req.params.id },
    force: true
  });
  return res.json(dbResponse);
}

module.exports = { authenticate, index, store, edit, remove };
