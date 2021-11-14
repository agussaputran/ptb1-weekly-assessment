'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Districts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here & tie districts with regencies
      Districts.belongsTo(models.Regencies, {
        foreignKey: 'regencies_id',
        onDelete: 'CASCADE'
      })
      Districts.hasMany(models.Districts, {
        foreignKey: 'districts_id'
      })
    }
  };
  Districts.init({
    regencies_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Districts',
  });
  return Districts;
};