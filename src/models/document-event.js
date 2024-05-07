// src/models/documentEvent.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const DocumentEvent = sequelize.define(
  "DocumentEvent",
  {
    documentId: {
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
    modelName: "DocumentEvent",
  }
);

module.exports = DocumentEvent;
