"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.addColumn(
        "Articles",
        "CategoryId",
        {
          type: Sequelize.INTEGER,
          defaultValue: 1,
        },
        { transaction }
      );
      await queryInterface.addConstraint(
        "Articles",
        {
          fields: ["CategoryId"],
          type: "FOREIGN KEY",
          name: "FK_Articles_Categories",
          references: {
            table: "Categories",
            field: "id",
          },
        },
        { transaction }
      );
    } catch (error) {
      console.error(error);
      transaction.rollback();
    }
  },

  async down(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.removeConstraint(
        "Articles",
        "FK_Articles_Categories",
        { transaction }
      );
      await queryInterface.removeColumn("Articles", "CategoryId", {
        transaction,
      });
    } catch (error) {
      console.error(error);
      transaction.rollback();
    }
  },
};
