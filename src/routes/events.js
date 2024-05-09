const express = require("express");
const router = express.Router();
const { createEvent, getAllEvents } = require("../controllers/events");
const logger = require("../utils/logger");

router.post("/createEvents", (req, res, next) => {
  const requestBody = JSON.stringify(req.body);
  logger.info(
    `Received POST request to /createEvents with body: ${requestBody}`
  );
  createEvent(req, res, next);
});

router.get("/getAllEventsList", (req, res, next) => {
  logger.info(
    `Received GET request to /getAllEventsList. Fetching all events.`
  );
  getAllEvents(req, res, next);
});

module.exports = router;
