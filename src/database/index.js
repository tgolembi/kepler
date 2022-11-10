const Sequelize = require('sequelize');
const dbConfig = require('../config/database.js');

const Manufacturer = require('../models/Manufacturer.js');
const Item = require('../models/Item.js');
const ItemType = require('../models/ItemType.js');
const Panel = require('../models/Panel.js');

const sqlConnection = new Sequelize(dbConfig);

Manufacturer.init(sqlConnection);
Item.init(sqlConnection);
ItemType.init(sqlConnection);
Panel.init(sqlConnection);

module.exports = { sqlConnection };