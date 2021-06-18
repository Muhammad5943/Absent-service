'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Absences', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      modelType: {
        type: Sequelize.ENUM(
          'adminBraketBrick',
          'schoolEmployee',
          'teacher'
        ),
        allowNull: false
      },
      modelId: {
        type: Sequelize.ENUM("1","2","3"),
        allowNull: false
      },
      studentId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: true
      }
    });
  },

  down: async function (queryInterface, Sequelize) {
        await queryInterface.dropTable('Absences')
  }
};  