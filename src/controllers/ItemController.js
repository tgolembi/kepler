const Item = require('../models/Item.js');

async function index (req,res) {
	const dbResponse = await Item.findAll();
	return res.json(dbResponse);
}

async function store (req,res) {
	const dbResponse = await Item.create(req.body);
	return res.json(dbResponse);
}

async function edit (req,res) {
	const dbResponse = await Item.update(req.body,{
		where: { id: req.params.id }
	});
	return res.json(dbResponse);
}

async function remove (req,res) {
	const dbResponse = await Item.destroy({
		where: { id: req.params.id },
		force: true
	});
	return res.json(dbResponse);
}


async function load (req,res) {
	const dbResponse = await Item.bulkCreate(req.body);
	return res.json(dbResponse);
}


module.exports = { index, store, edit, remove, load };
