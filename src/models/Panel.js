const { Model, DataTypes } = require('sequelize');

class Panel extends Model {
  static init(sequelize) {
    super.init({
      item_id: DataTypes.INTEGER,
      description: DataTypes.STRING,
      active: DataTypes.BOOLEAN,
      notes: DataTypes.STRING,
      power: DataTypes.DECIMAL,
      voc: DataTypes.DECIMAL,
      vmp: DataTypes.DECIMAL,
      vstrmax: DataTypes.DECIMAL,
      isc: DataTypes.DECIMAL,
      imp: DataTypes.DECIMAL,
      imax: DataTypes.DECIMAL,
      t_op: DataTypes.DECIMAL,
      t_nom: DataTypes.DECIMAL,
      t_nomdelta: DataTypes.DECIMAL,
      tc_pmx: DataTypes.DECIMAL,
      tc_voc: DataTypes.DECIMAL,
      tc_isc: DataTypes.DECIMAL,
      efficiency: DataTypes.DECIMAL,
      tolerance_min: DataTypes.DECIMAL,
      tolerance_max: DataTypes.DECIMAL,
      weight: DataTypes.DECIMAL,
      length: DataTypes.DECIMAL,
      width: DataTypes.DECIMAL,
      height: DataTypes.DECIMAL,
      cell_type: DataTypes.STRING,
      cell_length: DataTypes.DECIMAL,
      cell_width: DataTypes.DECIMAL,
      cell_qtd: DataTypes.INTEGER,
      output_cable_length: DataTypes.DECIMAL,
      cross_section_area_mm2: DataTypes.DECIMAL,
      connectorType: DataTypes.STRING
    },{
      sequelize,
      freezeTableName: true,
      modelName: 'Panels'
    })
  }
};

module.exports = Panel;