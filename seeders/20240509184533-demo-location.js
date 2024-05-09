module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Locations", [
      {
        city: "New York",
        venue: "Tech Center",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        city: "San Francisco",
        venue: "Coding Lab",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Locations", null, {});
  },
};
