// src/models/guestEvent.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const GuestEvent = sequelize.define(
  "GuestEvent",
  {
    guestId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    eventId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "GuestEvent",
  }
);

module.exports = GuestEvent;
