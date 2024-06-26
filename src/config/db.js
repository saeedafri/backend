const { Sequelize } = require("sequelize");
const logger = require("../utils/logger");
require("dotenv").config();

const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_NAME = process.env.DB_NAME;

if (!DB_USER || !DB_PASS || !DB_HOST || !DB_PORT || !DB_NAME) {
  throw new Error("Database configuration is incomplete.");
}

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: "mysql",
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

sequelize
  .authenticate()
  .then(() => {
    logger.info(
      "Database configuration:",
      JSON.stringify(
        {
          DB_USER,
          DB_PASS,
          DB_HOST,
          DB_PORT,
          DB_NAME,
        },
        null,
        2
      )
    );
    logger.info(
      "Connection to the database has been established successfully."
    );
  })
  .catch((error) => {
    logger.error("Unable to connect to the database:", error);
  });

module.exports = sequelize;
