'use strict';

const { Sequelize } = require('sequelize');

const userModel = {
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

  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
};

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', userModel);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};
