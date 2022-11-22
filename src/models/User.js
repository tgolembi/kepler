const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init (sequelize) {
    super.init({
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      active: DataTypes.BOOLEAN
    }, {
      sequelize,
      freezeTableName: true,
      modelName: 'Users',
      defaultScope: {
        attributes: {
          // exclude: ['password']
        }
      }
    });
  }
};

module.exports = User;
