// src/controllers/documentsController.js

const express = require("express");
const Document = require("../models/document"); // Adjust the path according to your project structure

// Create a new document
let createDocument = async (req, res) => {
  const { eventId, fileName, filePath } = req.body;

  try {
    const newDocument = await Document.create({
      eventId,
      fileName,
      filePath,
    });
    res.status(201).json(newDocument);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while creating the document." });
  }
};

// Get all documents for a specific event
let getAllDocumentsForEvent = async (req, res) => {
  const { eventId } = req.params;

  try {
    // Adjusted to not include associations
    const documents = await Document.findAll({
      where: { eventId: Number(eventId) },
    });
    res.status(200).json(documents);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching the documents." });
  }
};
module.exports = {
  createDocument,
  getAllDocumentsForEvent,
};
