'use strict';
const faker = require('faker')

const absences = [...Array(50)].map((absence) => (
  {
    name: faker.name.firstName(),
    modelType: ['adminBraketBrick'],
    modelId: [1],
    studentId: faker.datatype.number(),
    createdAt: new Date(),
    updatedAt: null
  }
))

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

    return queryInterface.bulkInsert('Absences', absences, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

     return queryInterface.bulkInsert('Absences', null, {});
  }
};
