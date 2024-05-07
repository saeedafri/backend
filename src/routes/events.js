// src/routes/events.js

const express = require("express");
const router = express.Router();
const { createEvent, getAllEvents } = require("../controllers/events");

router.post("/createEvents", createEvent); // Create a new event
router.get("/getAllEventsList", getAllEvents); // Get all events

module.exports = router;
