"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Events",
      [
        {
          name: "Conference",
          description: "Annual conference for industry professionals",
          date: "2024-06-15",
          time: "09:00:00",
          duration: 120, // in minutes
          locationId: 1, // Assuming location ID for New York
          userId: 1, // Assuming user ID for John Doe
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Workshop",
          description: "Hands-on workshop for beginners",
          date: "2024-07-20",
          time: "13:00:00",
          duration: 180, // in minutes
          locationId: 2, // Assuming location ID for Los Angeles
          userId: 2, // Assuming user ID for Jane Smith
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Add more events as needed
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Events", null, {});
  },
};
