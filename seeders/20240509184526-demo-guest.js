const { Sequelize } = require("sequelize");
const sequelize = require("../src/config/db");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Guests", [
      {
        guestName: "John Doe",
        email: "john.doe@example.com",
        slackId: "JD123",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        guestName: "Jane Smith",
        email: "jane.smith@example.com",
        slackId: "JS456",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Guests", null, {}); // Use model name "Guest" instead of "Guests"
  },
};
