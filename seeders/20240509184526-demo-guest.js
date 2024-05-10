const { Sequelize } = require("sequelize");
const sequelize = require("../src/config/db");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Guests", [
      {
        guestName: "John Doe",
        email: "john.doe@example.com",
        slackId: "JD123",
        createdAt: "1937-01-01",
        updatedAt: "1937-01-01",
      },
      {
        guestName: "Jane Smith",
        email: "jane.smith@example.com",
        slackId: "JS456",
        createdAt: "1937-01-01",
        updatedAt: "1937-01-01",
      },
      {
        guestName: "Alice Johnson",
        email: "alice.johnson@example.com",
        slackId: "AJ789",
        createdAt: "1937-01-01",
        updatedAt: "1937-01-01",
      },
      {
        guestName: "Bob Brown",
        email: "bob.brown@example.com",
        slackId: "BB101",
        createdAt: "1937-01-01",
        updatedAt: "1937-01-01",
      },
      {
        guestName: "Charlie Davis",
        email: "charlie.davis@example.com",
        slackId: "CD202",
        createdAt: "1937-01-01",
        updatedAt: "1937-01-01",
      },
      {
        guestName: "David Evans",
        email: "david.evans@example.com",
        slackId: "DE303",
        createdAt: "1937-01-01",
        updatedAt: "1937-01-01",
      },
      {
        guestName: "Eve Foster",
        email: "eve.foster@example.com",
        slackId: "EF404",
        createdAt: "1937-01-01",
        updatedAt: "1937-01-01",
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Guests", null, {}); // Use model name "Guest" instead of "Guests"
  },
};
