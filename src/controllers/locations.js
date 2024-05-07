// src/controllers/locationsController.js

const Location = require("../models/location"); // Adjust the path according to your project structure

// Create a new location
let createLocation = async (req, res) => {
  const { city, venue } = req.body;

  try {
    const newLocation = await Location.create({
      city,
      venue,
    });
    res.status(201).json(newLocation);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while creating the location." });
  }
};

// Get all locations
let getAllLocations = async (req, res) => {
  try {
    const locations = await Location.findAll();
    res.status(200).json(locations);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching the locations." });
  }
};

// Corrected export
module.exports = {
  createLocation,
  getAllLocations,
};
