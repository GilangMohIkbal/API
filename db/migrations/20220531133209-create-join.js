'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('joins', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.UUID
      },
      class_id: {
        type: Sequelize.UUID
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      role: {
        type: Sequelize.ENUM
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('joins');
  }
};