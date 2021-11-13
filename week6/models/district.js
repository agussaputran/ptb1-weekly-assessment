const Province = require('./provinces')

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class district extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // this.hasOne(models.provinces, {foreignKey: 'province_id',sourceKey:'id'})
    }
  };
  district.init({
    province_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    deleted_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'district',
  });
  return district;
};