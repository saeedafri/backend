const { Sequelize } = require("sequelize");
const { execSync } = require("child_process");
const logger = require("../utils/logger");
require("dotenv").config();

const sequelize = new Sequelize(process.env.DB_URL, {
  logging: false,
});

async function setupDatabase() {
  try {
    // Drop the database
    const dropCommand = "DROP DATABASE IF EXISTS event_organizing_application;";
    await sequelize.query(dropCommand);

    // Create the database
    const createCommand =
      "CREATE DATABASE IF NOT EXISTS event_organizing_application;";
    await sequelize.query(createCommand);

    // Run migrations
    const migrateCommand = "npx sequelize-cli db:migrate";
    execSync(migrateCommand, { stdio: "inherit" });

    // Seed the database
    const seedCommand = "npx sequelize-cli db:seed:all";
    execSync(seedCommand, { stdio: "inherit" });
  } catch (error) {
    logger.error("Error setting up the database:", error);
    process.exit(1);
  }
}

module.exports = setupDatabase;
