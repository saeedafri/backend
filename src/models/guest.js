// src/models/guest.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const GuestEvent = require("./guest-event"); // Import the join table model

const Guest = sequelize.define(
  "Guest",
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: DataTypes.STRING,
    slackId: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Guest",
  }
);

// Define the association
Guest.hasMany(GuestEvent, { foreignKey: "guestId" });
GuestEvent.belongsTo(Guest, { foreignKey: "guestId" });

module.exports = Guest;
