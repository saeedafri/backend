const express = require("express");
const Document = require("../models/document");
const logger = require("../utils/logger");

let createDocument = async (req, res) => {
  const { eventId, fileName, filePath } = req.body;

  try {
    const newDocument = await Document.create({
      eventId,
      fileName,
      filePath,
    });
    logger.info(
      `Document created successfully. Event ID: ${eventId}, File Name: ${fileName}`
    );
    res.status(201).json(newDocument);
  } catch (error) {
    logger.error(`Error creating document: ${error.message}`);
    res
      .status(500)
      .json({ error: "An error occurred while creating the document." });
  }
};

let getAllDocumentsForEvent = async (_req, res) => {
  try {
    const documents = await Document.findAll({});
    logger.info(`Fetched all documents for event.`);
    res.status(200).json(documents);
  } catch (error) {
    logger.error(`Error fetching documents: ${error.message}`);
    res
      .status(500)
      .json({ error: "An error occurred while fetching the documents." });
  }
};

module.exports = {
  createDocument,
  getAllDocumentsForEvent,
};
