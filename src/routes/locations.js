const express = require("express");
const router = express.Router();
const { createLocation, getAllLocations } = require("../controllers/locations");
const logger = require("../utils/logger");

router.post("/addLocation", (req, res, next) => {
  const requestBody = JSON.stringify(req.body);
  logger.info(
    `Received POST request to /addLocation with body: ${requestBody}`
  );
  createLocation(req, res, next);
});

router.get("/getAllLocationList", (req, res, next) => {
  logger.info(
    `Received GET request to /getAllLocationList. Fetching all locations.`
  );
  getAllLocations(req, res, next);
});

module.exports = router;
