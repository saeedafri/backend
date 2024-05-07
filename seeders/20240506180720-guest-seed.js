"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Guests",
      [
        {
          firstName: "Alice",
          lastName: "Johnson",
          email: "alice@example.com",
          slackId: "U98765432",
          userId: null, // Assuming no associated user
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Bob",
          lastName: "Smith",
          email: "bob@example.com",
          slackId: "U54321098",
          userId: null, // Assuming no associated user
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Add more guests as needed
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Guests", null, {});
  },
};
