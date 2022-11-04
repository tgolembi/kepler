const Manufacturer = require('../models/Manufacturer.js');

async function index (req,res) {
	const items = await Manufacturer.findAll();
	return res.json(items);
}

async function store (req,res) {
	const dbResponse = await Manufacturer.create(req.body);
	return res.json(dbResponse);
}

async function edit (req,res) {
	const dbResponse = await Manufacturer.update(req.body,{
		where: { id: req.params.id }
	});
	return res.json(dbResponse);
}

async function remove (req,res) {
	const dbResponse = await Manufacturer.destroy({
		where: { id: req.params.id },
		force: true
	});
	return res.json(dbResponse);
}


module.exports = { index, store, edit, remove };
