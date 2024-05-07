const express = require("express");
const router = express.Router();
const {
  createDocument,
  getAllDocumentsForEvent,
} = require("../controllers/documents");

router.post("/createDocument", createDocument); // Create a new document
router.get("/getAllDocumentsList", getAllDocumentsForEvent); // Get all documents for a specific event

module.exports = router;
