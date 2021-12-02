'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SubDistricts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      SubDistricts.belongsTo(models.Districts, {
        foreignKey: 'districts_id',
        onDelete: 'CASCADE'
      })
      SubDistricts.hasMany(models.Offices, {
        foreignKey: 'sub_districts_id'
      })
      SubDistricts.hasMany(models.Users, {
        foreignKey: 'sub_districts_id'
      })
    }
  };
  SubDistricts.init({
    districts_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'SubDistricts',
  });
  return SubDistricts;
};