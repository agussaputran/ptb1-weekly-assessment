'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users',[{
      sub_districts_id: 1,
      first_name: "Bill",
      last_name: "Jackson",
      email: "bil@gmail.com",
      password: "bill",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      sub_districts_id: 5,
      first_name: "Nathan",
      last_name: "Neil",
      email: "nathan@gmail.com",
      password: "nathan",
      createdAt: new Date(),
      updatedAt: new Date()
     },{
      sub_districts_id: 14,
      first_name: "Ron",
      last_name: "Russell",
      email: "ron@gmail.com",
      password: "ron",
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
     await queryInterface.bulkDelete('Users', null, {})

  }
};
