const ItemType = require('../models/ItemType.js');

async function index (req,res) {
	const dbResponse = await ItemType.findAll();
	return res.json(dbResponse);
}

async function store (req,res) {
	const dbResponse = await ItemType.create(req.body);
	return res.json(dbResponse);
}

async function edit (req,res) {
	const dbResponse = await ItemType.update(req.body,{
		where: { id: req.params.id }
	});
	return res.json(dbResponse);
}

async function remove (req,res) {
	const dbResponse = await ItemType.destroy({
		where: { id: req.params.id },
		force: true
	});
	return res.json(dbResponse);
}


module.exports = { index, store, edit, remove };
