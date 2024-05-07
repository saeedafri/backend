"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "GuestEvents",
      [
        {
          guestId: 1, // Assuming guest ID for Alice Johnson
          eventId: 1, // Assuming event ID for Conference
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          guestId: 2, // Assuming guest ID for Bob Smith
          eventId: 2, // Assuming event ID for Workshop
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Add more guest events as needed
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("GuestEvents", null, {});
  },
};
