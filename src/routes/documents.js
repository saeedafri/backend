const express = require("express");
const router = express.Router();
const {
  createDocument,
  getAllDocumentsForEvent,
} = require("../controllers/documents");

router.post("/createDocument", createDocument); // Create a new document
router.get("/getAllDocumentsList", getAllDocumentsForEvent);

module.exports = router;
