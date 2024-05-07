"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Locations",
      [
        {
          city: "New York",
          venue: "Madison Square Garden",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: "Los Angeles",
          venue: "Staples Center",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Add more locations as needed
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Locations", null, {});
  },
};
