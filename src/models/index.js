// src/models/index.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

// Import models
const Document = require("./document");
const Event = require("./event");
const Guest = require("./guest");
const Location = require("./location");
const User = require("./user");

module.exports = {
  Document,
  Event,
  Guest,
  Location,
  User,
};
