module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Locations", [
      {
        city: "New York",
        venue: "Tech Center",
        createdAt: "2020-01-01",
        updatedAt: "2020-01-01",
      },
      {
        city: "San Francisco",
        venue: "Coding Lab",
        createdAt: "2020-01-01",
        updatedAt: "2020-01-01",
      },
      {
        city: "Bangalore",
        venue: "Silicon Valley",
        createdAt: "2020-01-01",
        updatedAt: "2020-01-01",
      },
      {
        city: "Mumbai",
        venue: "Cyber Park",
        createdAt: "2020-01-01",
        updatedAt: "2020-01-01",
      },
      {
        city: "Delhi",
        venue: "Tech Hub",
        createdAt: "2020-01-01",
        updatedAt: "2020-01-01",
      },
      {
        city: "Hyderabad",
        venue: "Innovation Center",
        createdAt: "2020-01-01",
        updatedAt: "2020-01-01",
      },
      {
        city: "Pune",
        venue: "Digital Campus",
        createdAt: "2020-01-01",
        updatedAt: "2020-01-01",
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Locations", null, {});
  },
};
