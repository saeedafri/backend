const Location = require("../models/location");
const logger = require("../utils/logger");

let createLocation = async (req, res) => {
  const { city, venue } = req.body;

  try {
    const newLocation = await Location.create({
      city,
      venue,
    });
    logger.info(
      `Location created successfully. City: ${city}, Venue: ${venue}`
    );
    res.status(201).json(newLocation);
  } catch (error) {
    logger.error(`Error creating location: ${error.message}`);
    res
      .status(500)
      .json({ error: "An error occurred while creating the location." });
  }
};

let getAllLocations = async (req, res) => {
  try {
    const locations = await Location.findAll();
    logger.info(`Fetched all locations.`);
    res.status(200).json(locations);
  } catch (error) {
    logger.error(`Error fetching locations: ${error.message}`);
    res
      .status(500)
      .json({ error: "An error occurred while fetching the locations." });
  }
};

module.exports = {
  createLocation,
  getAllLocations,
};
