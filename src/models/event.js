// src/models/event.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const DocumentEvent = require("./document-event");
const GuestEvent = require("./guest-event");
const Location = require("./location");
const User = require("./user");

const Event = sequelize.define(
  "Event",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: DataTypes.TEXT,
    date: DataTypes.DATE,
    time: DataTypes.TIME,
    duration: DataTypes.INTEGER,
    locationId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Event",
  }
);

Event.hasMany(DocumentEvent, { foreignKey: "eventId" });
Event.hasMany(GuestEvent, { foreignKey: "eventId" });
Location.hasMany(Event, { foreignKey: "locationId" });
User.hasMany(Event, { foreignKey: "userId" });
DocumentEvent.belongsTo(Event, { foreignKey: "eventId" });
GuestEvent.belongsTo(Event, { foreignKey: "eventId" });
Event.belongsTo(Location, { foreignKey: "locationId" });
Event.belongsTo(User, { foreignKey: "userId" });

module.exports = Event;
