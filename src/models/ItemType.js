const { Model, DataTypes } = require('sequelize');

class ItemType extends Model {
  static init(sequelize) {
    super.init({
      alias: DataTypes.STRING
    },{
      sequelize,
      freezeTableName: true,
      modelName: 'ItemTypes'
    })
  }
};

module.exports = ItemType;