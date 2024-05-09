"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Events", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      eventName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      eventDescription: {
        type: Sequelize.TEXT,
      },
      eventDate: {
        type: Sequelize.DATE,
      },
      eventTime: {
        type: Sequelize.TIME,
      },
      eventDuration: {
        type: Sequelize.INTEGER,
      },
      eventLocationName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      eventGuestIDs: {
        type: Sequelize.JSON,
        allowNull: false,
      },
      guestNotificationType: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "Email",
      },
      reminderDurationMinutes: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 60,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Events");
  },
};
