// src/models/document.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const DocumentEvent = require("./document-event"); // Import the join table model

const Document = sequelize.define(
  "Document",
  {
    fileName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    filePath: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Document",
  }
);

// Define the association
Document.hasMany(DocumentEvent, { foreignKey: "documentId" });
DocumentEvent.belongsTo(Document, { foreignKey: "documentId" });

module.exports = Document;
