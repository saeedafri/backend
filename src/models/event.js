const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database"); // Adjust the path according to your project structure

class Event extends Model {}

Event.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    eventName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    eventDescription: {
      type: DataTypes.TEXT,
    },
    eventDate: {
      type: DataTypes.DATE,
    },
    eventTime: {
      type: DataTypes.TIME,
    },
    eventDuration: {
      type: DataTypes.INTEGER,
    },
    eventLocationName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    eventGuestIDs: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    guestNotificationType: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Email",
    },
    reminderDurationMinutes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 60,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  },
  {
    sequelize,
    modelName: "Event",
    tableName: "Events",
  }
);

module.exports = Event;
