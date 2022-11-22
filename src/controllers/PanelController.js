const Panel = require('../models/Panel.js');

async function index (req,res) {
  const dbResponse = await Panel.findAll();
  return res.json(dbResponse);
}

async function store (req,res) {
  const dbResponse = await Panel.create(req.body);
  return res.json(dbResponse);
}

async function edit (req,res) {
  const dbResponse = await Panel.update(req.body,{
    where: { id: req.params.id }
  });
  return res.json(dbResponse);
}

async function remove (req,res) {
  const dbResponse = await Panel.destroy({
    where: { id: req.params.id },
    force: true
  });
  return res.json(dbResponse);
}


module.exports = { index, store, edit, remove };
