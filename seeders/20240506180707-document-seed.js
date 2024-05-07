"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Documents",
      [
        {
          fileName: "Document 1",
          filePath: "/path/to/document1.pdf",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fileName: "Document 2",
          filePath: "/path/to/document2.pdf",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Add more documents as needed
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Documents", null, {});
  },
};
