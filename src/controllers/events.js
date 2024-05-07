// src/controllers/eventsController.js

const Event = require("../models/event"); // Adjust the path according to your project structure
const Location = require("../models/location"); // Import the Location model
const { checkVenueAvailability } = require("../services/eventService");
const User = require("../models/user"); // Import the User model
const ControllerError = require("../utils/errors");

let createEvent = async (req, res) => {
  const { name, description, date, time, duration, locationId, userId } =
    req.body;

  try {
    // Check if the user exists
    const user = await User.findByPk(userId);
    if (!user) {
      throw new ControllerError(
        "USER_NOT_FOUND",
        "The user could not be found."
      );
    }

    // Check venue availability
    const venue = await Location.findByPk(locationId);
    const startTime = new Date(date); // Assuming date is the start time
    const endTime = new Date(date.getTime() + duration * 60000); // Adjust based on your actual duration handling

    if (await checkVenueAvailability(venue, startTime, endTime)) {
      throw new Error(
        "The venue is already booked during the proposed event time."
      );
    }

    // Proceed with event creation if no overlapping events found
    const newEvent = await Event.create({
      name,
      description,
      date,
      time,
      duration,
      locationId,
      userId, // Link the event to the user
    });
    res.status(201).json(newEvent);
  } catch (error) {
    const controllerError = new ControllerError(
      "CONTROLLER_ERROR",
      error.message
    );
    res.status(500).json({ error: controllerError.message });
  }
};

let getAllEvents = async (_req, res) => {
  try {
    const events = await Event.findAll();
    res.status(200).json(events);
  } catch (error) {
    const controllerError = new ControllerError(
      "CONTROLLER_ERROR",
      error.message
    );
    res.status(500).json({ error: controllerError.message });
  }
};

module.exports = {
  createEvent,
  getAllEvents,
};
