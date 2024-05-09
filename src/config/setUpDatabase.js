const { Sequelize } = require("sequelize");
const { execSync } = require("child_process");
const logger = require("../utils/logger");
require("dotenv").config();

const sequelize = new Sequelize(process.env.DB_URL, {
  logging: true,
});

async function setupDatabase() {
  try {
    const dbName = process.env.DB_NAME;

    const dropCommand = `DROP DATABASE IF EXISTS ${dbName};`;
    await sequelize.query(dropCommand);

    const createCommand = `CREATE DATABASE IF NOT EXISTS ${dbName};`;
    await sequelize.query(createCommand);

    const migrateCommand = "npx sequelize-cli db:migrate";
    execSync(migrateCommand, { stdio: "inherit" });

    const seedCommand = "npx sequelize-cli db:seed:all";
    execSync(seedCommand, { stdio: "inherit" });
  } catch (error) {
    logger.error("Error setting up the database:", error);
    process.exit(1);
  }
}

module.exports = setupDatabase;
