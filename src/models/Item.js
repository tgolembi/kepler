const { Model, DataTypes } = require('sequelize');

class Item extends Model {
  static init (sequelize) {
    super.init({
      code: DataTypes.STRING,
      alias: DataTypes.STRING,
      description: DataTypes.STRING,
      manufacturer_id: DataTypes.INTEGER,
      type_id: DataTypes.INTEGER,
      series: DataTypes.STRING,
      model: DataTypes.STRING,
      version: DataTypes.STRING,
      active: DataTypes.BOOLEAN,
      notes: DataTypes.STRING
    }, {
      sequelize,
      freezeTableName: true,
      modelName: 'Items'
    });
  }
};

module.exports = Item;
