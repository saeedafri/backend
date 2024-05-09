const express = require("express");
const router = express.Router();
const {
  createDocument,
  getAllDocumentsForEvent,
} = require("../controllers/documents");
const logger = require("../utils/logger");

router.post("/createDocument", (req, res, next) => {
  const requestBody = JSON.stringify(req.body);
  logger.info(
    `Received POST request to /createDocument with body: ${requestBody}`
  );
  createDocument(req, res, next);
});

router.get("/getAllDocumentsList", (req, res, next) => {
  logger.info(
    `Received GET request to /getAllDocumentsList. Fetching all documents for the event.`
  );
  getAllDocumentsForEvent(req, res, next);
});

module.exports = router;
