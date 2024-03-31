"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Users", "user_name", {
      type: Sequelize.STRING,
      unique: true,
    });
    await queryInterface.addColumn("Users", "is_active", {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    });
    await queryInterface.addColumn("Users", "is_activated", {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    });
    await queryInterface.changeColumn("Users", "email", {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    });
    await queryInterface.changeColumn("Users", "password", {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Users", "is_active");
    await queryInterface.removeColumn("Users", "is_activated");
    await queryInterface.removeColumn("Users", "user_name");
    await queryInterface.changeColumn("Users", "email", {
      type: Sequelize.STRING,
    });
    await queryInterface.changeColumn("Users", "password", {
      type: Sequelize.STRING,
    });
  },
};
