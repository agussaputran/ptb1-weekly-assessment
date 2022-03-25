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
   await queryInterface.bulkInsert('Districts', [{
    regencies_id:1,
    name: 'Kuta',
    createdAt: new Date(),
    updatedAt: new Date()
   },{
    regencies_id:1,
    name: 'Mengwi',
    createdAt: new Date(),
    updatedAt: new Date()
   },{
    regencies_id:1,
    name: 'Abiansemal',
    createdAt: new Date(),
    updatedAt: new Date()
   },{
    regencies_id:1,
    name: 'Petang',
    createdAt: new Date(),
    updatedAt: new Date()
   },{
    regencies_id:1,
    name: 'South Kuta',
    createdAt: new Date(),
    updatedAt: new Date()
   },{
    regencies_id:1,
    name: 'North Kuta',
    createdAt: new Date(),
    updatedAt: new Date()
   },{
    regencies_id: 2,
    name: 'Susut',
    createdAt: new Date(),
    updatedAt: new Date()
   },{
    regencies_id: 2,
    name: 'Bangli',
    createdAt: new Date(),
    updatedAt: new Date()
   },{
    regencies_id: 2,
    name: 'Tembuku',
    createdAt: new Date(),
    updatedAt: new Date()
   },{
    regencies_id: 2,
    name: 'Kintamani',
    createdAt: new Date(),
    updatedAt: new Date()
   }
  ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Districts', null, {})
  }
};
