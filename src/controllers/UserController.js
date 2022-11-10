const User = require('../models/User.js');

async function index (req,res) {
	const dbResponse = await User.findAll();
	return res.json(dbResponse);
}

async function store (req,res) {
	const dbResponse = await User.create(req.body);
	return res.json(dbResponse);
}

async function edit (req,res) {
	const dbResponse = await User.update(req.body,{
		where: { id: req.params.id }
	});
	return res.json(dbResponse);
}

async function remove (req,res) {
	const dbResponse = await User.destroy({
		where: { id: req.params.id },
		force: true
	});
	return res.json(dbResponse);
}


module.exports = { index, store, edit, remove };
