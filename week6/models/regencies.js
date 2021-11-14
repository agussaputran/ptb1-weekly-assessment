'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Regencies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Regencies.belongsTo (models.Provinces, {
        foreignKey: 'province_id',
        onDelete: 'CASCADE'
      }) 
      Regencies.hasMany(models.Districts, {
        foreignKey: 'regencies_id'
      })
    }
  };
  Regencies.init({
    province_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Regencies',
  });
  return Regencies;
};