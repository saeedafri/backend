const Event = require("../models/event");
const Location = require("../models/location");
const { checkVenueAvailability } = require("../services/eventService");
const User = require("../models/user");
const ControllerError = require("../utils/errors");
const logger = require("../utils/logger");
const axios = require("axios");
const axios = require("axios");
require("dotenv").config();

async function translateText(text, sourceLanguage, targetLanguage = "en") {
  const url = `${
    process.env.MYMEMORY_TRANSLATION_API_URL
  }?q=${encodeURIComponent(text)}&langpair=${sourceLanguage}|${targetLanguage}`;
  try {
    const response = await axios.get(url);
    const translatedText = response.data.responseData.translatedText;
    return translatedText;
  } catch (error) {
    console.error("Error translating text:", error.message);
    return null;
  }
}

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

    const translatedName = await translateText(name, "hi", "en");
    const translatedDescription = await translateText(description, "hi", "en");

    const newEvent = await Event.create({
      name: translatedName,
      description: translatedDescription,
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
