'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Offices extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate(models) {
      // define association here
      Offices.belongsTo(models.SubDistricts, {
        foreignKey: 'sub_districts_id',
        onDelete: 'CASCADE'
      })
      
    }
  };
  Offices.init({
    sub_districts_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Offices',
  });
  return Offices;
};