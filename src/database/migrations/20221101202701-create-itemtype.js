'use strict';

const { Sequelize } = require('sequelize');

const itemTypeModel = {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  created_at: {
    type: Sequelize.STRING,
    allowNull: false
  },
  updated_at: {
    type: Sequelize.STRING,
    allowNull: false
  },

  alias: {
    type: Sequelize.STRING,
    allowNull: false
  }
};

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ItemTypes', itemTypeModel);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ItemTypes');
  }
};
