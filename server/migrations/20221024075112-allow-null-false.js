"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    await Promise.all([
      queryInterface.changeColumn(
        "Users",
        "username",
        { type: Sequelize.STRING, allowNull: false },
        { transaction }
      ),
      queryInterface.changeColumn(
        "Users",
        "password",
        { type: Sequelize.STRING, allowNull: false },
        { transaction }
      ),
    ]);
  },

  async down(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    await Promise.all([
      queryInterface.changeColumn(
        "Users",
        "username",
        { type: Sequelize.STRING, allowNull: true },
        { transaction }
      ),
      queryInterface.changeColumn(
        "Users",
        "password",
        { type: Sequelize.STRING, allowNull: true },
        { transaction }
      ),
    ]);
  },
};
