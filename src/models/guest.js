// src/models/guest.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Guest = sequelize.define(
  "Guest",
  {
    guestName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    slackId: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Guest",
  }
);

module.exports = Guest;
