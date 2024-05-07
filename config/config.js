require("dotenv").config(); // Load environment variables from .env file

module.exports = {
  development: {
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASS || "admin",
    database: process.env.DB_NAME || "event_organizing_application",
    host: process.env.DB_HOST || "127.0.0.1",
    dialect: "mysql",
  },
  test: {
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASS || "admin",
    database:
      process.env.DB_NAME_TEST || "event_organizing_application_testing",
    host: process.env.DB_HOST || "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASS || "admin",
    database:
      process.env.DB_NAME_PROD || "event_organizing_application_production",
    host: process.env.DB_HOST || "127.0.0.1",
    dialect: "mysql",
  },
};
