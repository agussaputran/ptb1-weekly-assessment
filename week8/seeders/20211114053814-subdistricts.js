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
   await queryInterface.bulkInsert('SubDistricts',[{
     districts_id: 1,
     name: "Legian",
     createdAt: new Date(),
     updatedAt: new Date()
   },{
    districts_id: 1,
    name: "Kuta",
    createdAt: new Date(),
    updatedAt: new Date()
   },{
    districts_id: 1,
    name: "Tuban",
    createdAt: new Date(),
    updatedAt: new Date()
   },{
    districts_id: 1,
    name: "Kedonganan",
    createdAt: new Date(),
    updatedAt: new Date()
   },{
    districts_id: 1,
    name: "Seminyak",
    createdAt: new Date(),
    updatedAt: new Date()
   },{
    districts_id: 2,
    name: "Abianbase",
    createdAt: new Date(),
    updatedAt: new Date()
   },{
    districts_id: 2,
    name: "Kapal",
    createdAt: new Date(),
    updatedAt: new Date()
   },{
    districts_id: 2,
    name: "Lukluk",
    createdAt: new Date(),
    updatedAt: new Date()
   },{
    districts_id: 2,
    name: "Sading",
    createdAt: new Date(),
    updatedAt: new Date()
   },{
    districts_id: 2,
    name: "Sempidi",
    createdAt: new Date(),
    updatedAt: new Date()
   },{
    districts_id: 5,
    name: "Pecatu",
    createdAt: new Date(),
    updatedAt: new Date()
   },{
    districts_id: 5,
    name: "Ungasan",
    createdAt: new Date(),
    updatedAt: new Date()
   },{
    districts_id: 5,
    name: "Kutuh",
    createdAt: new Date(),
    updatedAt: new Date()
   },{
    districts_id: 6,
    name: "Canggu",
    createdAt: new Date(),
    updatedAt: new Date()
   },{
    districts_id: 6,
    name: "Dalung",
    createdAt: new Date(),
    updatedAt: new Date()
   },{
    districts_id: 6,
    name: "Tibubeneng",
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
    await queryInterface.bulkDelete('SubDistricts', null, {})
  }
};
