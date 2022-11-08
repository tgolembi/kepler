const Sequelize = require('sequelize');
const dbConfig = require('../config/database.js');

const Manufacturer = require('../models/Manufacturer.js');
const Item = require('../models/Item.js');
//const Panel = require('../models/Panel.js');

const postgresConnection = new Sequelize(dbConfig);

Manufacturer.init(postgresConnection);
Item.init(postgresConnection);

module.exports = { postgresConnection };