const Event = require("../models/event");
const ControllerError = require("../utils/errors");
const logger = require("../utils/logger");
const axios = require("axios");
const { notifyGuests } = require("../services/notifications");
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
  const {
    eventName,
    eventDescription,
    eventDate,
    eventTime,
    eventDuration,
    eventLocationName,
    eventGuestIDs,
    guestNotificationType,
    reminderDurationMinutes,
  } = req.body;

  try {
    // const translatedName = await translateText(eventName, "hi", "en");
    // const translatedDescription = await translateText(
    //   eventDescription,
    //   "hi",
    //   "en"
    // );

    const newEvent = await Event.create({
      eventName: eventName,
      eventDescription: eventDescription,
      eventDate,
      eventTime,
      eventDuration,
      eventLocationName,
      eventGuestIDs,
      guestNotificationType,
      reminderDurationMinutes,
    });
    logger.info(`Event created successfully. Event ID: ${newEvent.id}`);

    // await notifyGuests({
    //   eventGuestIDs,
    //   guestNotificationType,
    //   reminderDurationMinutes,
    //   eventDate,
    //   eventTime,
    // });
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
