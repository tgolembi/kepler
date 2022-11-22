const { Model, DataTypes } = require('sequelize');

class Manufacturer extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      alias: DataTypes.STRING,
      panel: DataTypes.BOOLEAN,
      inverter: DataTypes.BOOLEAN,
      stringbox: DataTypes.BOOLEAN,
      mlpe: DataTypes.BOOLEAN,
      misc: DataTypes.BOOLEAN,
      structure: DataTypes.BOOLEAN
    },{
      sequelize,
      freezeTableName: true,
      modelName: 'Manufacturers'
    })
  }
};

module.exports = Manufacturer;