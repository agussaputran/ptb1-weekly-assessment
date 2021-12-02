'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Offices',[{
      sub_districts_id: 1,
      name: "Hub Bali Coworking Legian",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
     sub_districts_id: 1,
     name: "Bali Bustle Coworking Legian",
     createdAt: new Date(),
     updatedAt: new Date()
    },{
      sub_districts_id: 5,
      name: "Sunset Coworking",
      createdAt: new Date(),
      updatedAt: new Date()
     },{
      sub_districts_id: 5,
      name: "Biliq Seminyak",
      createdAt: new Date(),
      updatedAt: new Date()
     },{
      sub_districts_id: 14,
      name: "Tropical Nomad Coworking Space",
      createdAt: new Date(),
      updatedAt: new Date()
     },{
      sub_districts_id: 14,
      name: "Dojo Bali Coworking",
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
     await queryInterface.bulkDelete('Offices', null, {})
  }
};
