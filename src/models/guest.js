// src/models/guest.js
const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/db");

class Guest extends Model {}

Guest.init(
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
    tableName: "Events",
  }
);

module.exports = Guest;
