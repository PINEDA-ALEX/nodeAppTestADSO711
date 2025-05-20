'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  //crea la tabla en la base de datos
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  //borra la tabla de la base de datos
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};