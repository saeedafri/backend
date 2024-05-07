// src/routes/guests.js

const express = require("express");
const router = express.Router();
const { createGuest, getAllGuestsForEvent } = require("../controllers/guests");

router.post("/addGuest", createGuest); // Create a new guest
router.get("/getAllGuestsList", getAllGuestsForEvent); // Get all guests for a specific event

module.exports = router;
