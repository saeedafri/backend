const express = require("express");
const router = express.Router();
const { createGuest, getAllGuestsForEvent } = require("../controllers/guests");
const logger = require("../utils/logger");

router.post("/addGuest", (req, res, next) => {
  const requestBody = JSON.stringify(req.body);
  logger.info(`Received POST request to /addGuest with body: ${requestBody}`);
  createGuest(req, res, next);
});

router.get("/getAllGuestsList", (req, res, next) => {
  logger.info(
    `Received GET request to /getAllGuestsList. Fetching all guests for the event.`
  );
  getAllGuestsForEvent(req, res, next);
});

module.exports = router;
