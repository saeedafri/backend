// src/routes/locations.js

const express = require("express");
const router = express.Router();
const { createLocation, getAllLocations } = require("../controllers/locations");

router.post("/addLocation", createLocation); // Create a new location
router.get("/getAllLocationList", getAllLocations); // Get all locations

module.exports = router;
