const Event = require("../models/event");
const Location = require("../models/location");
const { checkVenueAvailability } = require("../services/eventService");
const User = require("../models/user");
const ControllerError = require("../utils/errors");
const logger = require("../utils/logger");

let createEvent = async (req, res) => {
  const { name, description, date, time, duration, locationId, userId } =
    req.body;

  try {
    const user = await User.findByPk(userId);
    if (!user) {
      throw new ControllerError(
        "USER_NOT_FOUND",
        "The user could not be found."
      );
    }

    const venue = await Location.findByPk(locationId);
    const startTime = new Date(date);
    const endTime = new Date(date.getTime() + duration * 60000);

    if (await checkVenueAvailability(venue, startTime, endTime)) {
      throw new Error(
        "The venue is already booked during the proposed event time."
      );
    }

    const newEvent = await Event.create({
      name,
      description,
      date,
      time,
      duration,
      locationId,
      userId,
    });
    logger.info(`Event created successfully. Event ID: ${newEvent.id}`);
    res.status(201).json(newEvent);
  } catch (error) {
    logger.error(`Error creating event: ${error.message}`);
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
    logger.info(`Fetched all events.`);
    res.status(200).json(events);
  } catch (error) {
    logger.error(`Error fetching events: ${error.message}`);
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
