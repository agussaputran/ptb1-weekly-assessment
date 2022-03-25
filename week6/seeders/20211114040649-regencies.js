'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Regencies', [{
     province_id: 1,
     name: 'Badung Regency',
     createdAt: new Date(),
     updatedAt: new Date()
   },{
    province_id: 1,
    name: 'Bangli Regency',
    createdAt: new Date(),
    updatedAt: new Date()
   },{
    province_id: 1,
    name: 'Buleleng Regency',
    createdAt: new Date(),
    updatedAt: new Date()
   },{
    province_id: 1,
    name: 'Gianyar Regency',
    createdAt: new Date(),
    updatedAt: new Date()
   },{
    province_id: 1,
    name: 'Jembrana Regency',
    createdAt: new Date(),
    updatedAt: new Date()
   },{
    province_id: 1,
    name: 'Karangasem Regency',
    createdAt: new Date(),
    updatedAt: new Date()
   },{
    province_id: 1,
    name: 'Klungkung Regency',
    createdAt: new Date(),
    updatedAt: new Date()
   },{
    province_id: 1,
    name: 'Tabanan Regency',
    createdAt: new Date(),
    updatedAt: new Date()
   },{
    province_id: 1,
    name: 'Denpasar City',
    createdAt: new Date(),
    updatedAt: new Date()
   }
  ] )
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Regencies',null, {})
  }
};
