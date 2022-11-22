'use strict';

const { Sequelize } = require("sequelize");

const inverterModel = {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  item_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'Items',
      key: 'id'
    }
  },
  created_at: {
    type: Sequelize.STRING,
    allowNull: false
  },
  updated_at: {
    type: Sequelize.STRING,
    allowNull: false
  },

  description: {
    type: Sequelize.STRING,
    allowNull: true
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

  power: { type: Sequelize.DECIMAL },
  efficiency: { type: Sequelize.DECIMAL },
  connectionType: { type: Sequelize.STRING },
  phases: { type: Sequelize.DECIMAL },
  phasesVoltage: { type: Sequelize.DECIMAL },
  dcVMax: { type: Sequelize.DECIMAL },
  dcVRated: { type: Sequelize.DECIMAL },
  startVoltage: { type: Sequelize.DECIMAL },
  mppt1Qtd: { type: Sequelize.DECIMAL },
  mppt1VMax: { type: Sequelize.DECIMAL },
  mppt1VMin: { type: Sequelize.DECIMAL },
  mppt1IMax: { type: Sequelize.DECIMAL },
  mppt1Isc: { type: Sequelize.DECIMAL },
  mppt1InputQtd: { type: Sequelize.DECIMAL },
  mppt1CanSC: { type: Sequelize.BOOLEAN },
  powerMax: { type: Sequelize.DECIMAL },
  vMax: { type: Sequelize.DECIMAL },
  protection: { type: Sequelize.BOOLEAN },
  protectionDesc: { type: Sequelize.STRING },
  operationVoltages: { type: Sequelize.JSON }
};

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Inverters', inverterModel);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Inverters');
  }
}