const { Sequelize } = require("sequelize");
const { execSync } = require("child_process");
const logger = require("../utils/logger");
require("dotenv").config();

const sequelize = new Sequelize(process.env.DB_URL, {
  logging: true, // Enable logging of SQL queries
});

async function setupDatabase() {
  try {
    const dbName = process.env.DB_NAME;

    // Log the start of the database setup process
    logger.info(`Setting up database: ${dbName}`);

    const dropCommand = `DROP DATABASE IF EXISTS ${dbName};`;
    try {
      await sequelize.query(dropCommand);
      logger.info(`Dropped database: ${dbName}`);
    } catch (dropError) {
      logger.error(`Failed to drop database: ${dbName}`, dropError);
    }

    const createCommand = `CREATE DATABASE IF NOT EXISTS ${dbName};`;
    try {
      await sequelize.query(createCommand);
      logger.info(`Created database: ${dbName}`);
    } catch (createError) {
      logger.error(`Failed to create database: ${dbName}`, createError);
    }

    const migrateCommand = "npx sequelize-cli db:migrate";
    try {
      execSync(migrateCommand, { stdio: "inherit" });
      logger.info(`Migrated database: ${dbName}`);
    } catch (migrateError) {
      logger.error(`Failed to migrate database: ${dbName}`, migrateError);
    }

    const seedCommand = "npx sequelize-cli db:seed:all";
    try {
      execSync(seedCommand, { stdio: "inherit" });
      logger.info(`Seeded database: ${dbName}`);
    } catch (seedError) {
      logger.error(`Failed to seed database: ${dbName}`, seedError);
    }

    // Log the successful completion of the database setup process
    logger.info(`Successfully set up database: ${dbName}`);
  } catch (error) {
    // Log the error details for failure cases
    logger.error("Error setting up the database:", error);
    process.exit(1);
  }
}

module.exports = setupDatabase;
