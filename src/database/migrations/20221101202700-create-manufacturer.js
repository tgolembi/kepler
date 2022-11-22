'use strict';

const { Sequelize } = require('sequelize');

const manufacturerModel = {
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

  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  alias: {
    type: Sequelize.STRING,
    allowNull: false
  },

  panel: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  inverter: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  stringbox: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  mlpe: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  misc: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  structure: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
};

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Manufacturers', manufacturerModel);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Manufacturers');
  }
};
