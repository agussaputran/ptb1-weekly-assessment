const dbConfig = require("../config/db.config.js");

const Sequelize = require('sequelize');
// require('sequelize-hierarchy')(Sequelize);
// const Sequelize = require('sequelize-hierarchy')();
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
//   operatorsAliases: false,
define: {
  timestamps: false
},

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.provinces = require("./province.model.js")(sequelize, Sequelize);
db.regencies = require("./regency.model.js")(sequelize, Sequelize);
db.districts = require("./district.model.js")(sequelize, Sequelize);
db.offices = require("./office.model.js")(sequelize, Sequelize);
db.users = require("./user.model.js")(sequelize, Sequelize);

// A.hasOne(B, { /* options */ });
// A.belongsTo(B, { /* options */ });
// A.hasMany(B, { /* options */ });
// A.belongsToMany(B, { through: 'C', /* options */ });

db.provinces.hasMany(db.regencies, {foreignKey: 'province_id', onDelete: 'CASCADE'});
// db.regencies.belongsTo(db.provinces, {foreignKey: 'province_id'})

db.regencies.hasMany(db.districts, {foreignKey: 'regency_id', onDelete: 'CASCADE'});
db.districts.belongsTo(db.regencies, {foreignKey: 'regency_id'})

db.districts.hasMany(db.offices, {foreignKey: 'district_id', onDelete: 'CASCADE'});
db.offices.belongsTo(db.districts, {foreignKey: 'district_id'})

db.districts.hasMany(db.users, {foreignKey: 'district_id', onDelete: 'CASCADE'});



module.exports = db;