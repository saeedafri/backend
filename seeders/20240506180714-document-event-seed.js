"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "DocumentEvents",
      [
        {
          documentId: 1, // Assuming document ID for Document 1
          eventId: 1, // Assuming event ID for Conference
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          documentId: 2, // Assuming document ID for Document 2
          eventId: 2, // Assuming event ID for Workshop
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Add more document events as needed
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("DocumentEvents", null, {});
  },
};
