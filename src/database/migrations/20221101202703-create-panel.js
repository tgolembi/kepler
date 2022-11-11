'use strict';

const { Sequelize } = require("sequelize");

const panelModel = {
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

	power: {
		type: Sequelize.DECIMAL,
		allowNull: true
	},
	voc: {
		type: Sequelize.DECIMAL,
		allowNull: true
	},
	vmp: {
		type: Sequelize.DECIMAL,
		allowNull: true
	},
	vstrmax: {
		type: Sequelize.DECIMAL,
		allowNull: true
	},
	isc: {
		type: Sequelize.DECIMAL,
		allowNull: true
	},
	imp: {
		type: Sequelize.DECIMAL,
		allowNull: true
	},
	imax: {
		type: Sequelize.DECIMAL,
		allowNull: true
	},
	t_op: {
		type: Sequelize.DECIMAL,
		allowNull: true
	},
	t_nom: {
		type: Sequelize.DECIMAL,
		allowNull: true
	},
	t_nomdelta: {
		type: Sequelize.DECIMAL,
		allowNull: true
	},
	tc_pmx: {
		type: Sequelize.DECIMAL,
		allowNull: true
	},
	tc_voc: {
		type: Sequelize.DECIMAL,
		allowNull: true
	},
	tc_isc: {
		type: Sequelize.DECIMAL,
		allowNull: true
	},
	efficiency: {
		type: Sequelize.DECIMAL,
		allowNull: true
	},
	tolerance_min: {
		type: Sequelize.DECIMAL,
		allowNull: true
	},
	tolerance_max: {
		type: Sequelize.DECIMAL,
		allowNull: true
	},
	weight: {
		type: Sequelize.DECIMAL,
		allowNull: true
	},
	length: {
		type: Sequelize.DECIMAL,
		allowNull: true
	},
	width: {
		type: Sequelize.DECIMAL,
		allowNull: true
	},
	height: {
		type: Sequelize.DECIMAL,
		allowNull: true
	},
	cell_type: {
		type: Sequelize.ENUM,
		values: ['M','P'],
		allowNull: true
	},
	cell_length: {
		type: Sequelize.DECIMAL,
		allowNull: true
	},
	cell_width: {
		type: Sequelize.DECIMAL,
		allowNull: true
	},
	cell_qtd: {
		type: Sequelize.INTEGER,
		allowNull: true
	},
	output_cable_length: {
		type: Sequelize.DECIMAL,
		allowNull: true
	},
	cross_section_area_mm2: {
		type: Sequelize.DECIMAL,
		allowNull: true
	},
	connectorType: {
		type: Sequelize.STRING,
		allowNull: true
	}
};

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Panels', panelModel);
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('Panels');
	}
}