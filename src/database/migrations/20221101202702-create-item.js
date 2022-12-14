'use strict';

const { Sequelize } = require('sequelize');

const itemModel = {
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

  active: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: true
  },
  notes: {
    type: Sequelize.STRING,
    allowNull: true
  },

  code: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  alias: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  manufacturer_id: {
    type: Sequelize.INTEGER,
    allowNull: true,
    references: {
      model: 'Manufacturers',
      key: 'id'
    }
  },
  type_id: {
    type: Sequelize.INTEGER,
    allowNull: true,
    references: {
      model: 'ItemTypes',
      key: 'id'
    }
  },
  series: {
    type: Sequelize.STRING,
    allowNull: true
  },
  model: {
    type: Sequelize.STRING,
    allowNull: true
  },
  version: {
    type: Sequelize.STRING,
    allowNull: true
  },
  stock: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0
  }
};

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Items', itemModel);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Items');
  }
};
