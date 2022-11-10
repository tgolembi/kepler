const jwt = require('jsonwebtoken');
const User = require('../models/User.js');

async function checkToken (req, res, next) {
	if (req.headers.token) {
		const decoded = jwt.verify(req.headers.token, process.env.JWT_SECRET);
		req.user = await User.findOne({ where: { username: decoded.username } });
		if (decoded.username == req.headers.username) next();
		else res.status(401).json("Invalid Token!");
	}
	else res.status(400).json("Token not provided!");
}

module.exports = checkToken;