const { Sequelize } = require("sequelize");

// Replace these values with your actual database credentials
const DB_USER = "root";
const DB_PASS = "admin";
const DB_HOST = "localhost"; // or your database host
const DB_PORT = 3306; // default MySQL port
const DB_NAME = "event_organizing_application";

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

module.exports = sequelize;
