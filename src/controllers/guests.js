const logger = require("../utils/logger");
const Guest = require("../models/guest");

let createGuest = async (req, res) => {
  const { firstName, lastName, eventId } = req.body;

  try {
    const newGuest = await Guest.create({
      firstName,
      lastName,
      eventId,
    });
    logger.info(
      `Guest created successfully. First Name: ${firstName}, Last Name: ${lastName}`
    );
    res.status(201).json(newGuest);
  } catch (error) {
    logger.error(`Error creating guest: ${error.message}`);
    res
      .status(500)
      .json({ error: "An error occurred while creating the guest." });
  }
};

let getAllGuestsForEvent = async (_req, res) => {
  try {
    const guests = await Guest.findAll({});
    logger.info(`Fetched all guests for event.`);
    res.status(200).json(guests);
  } catch (error) {
    logger.error(`Error fetching guests: ${error.message}`);
    res
      .status(500)
      .json({ error: "An error occurred while fetching the guests." });
  }
};

let getGuestById = async (id) => {
  try {
    const guest = await Guest.findByPk(id); // Assuming findByPk is available for Sequelize
    if (!guest) {
      throw new Error("Guest not found.");
    }
    // Return the guest's email and Slack ID
    return {
      email: guest.email, // Assuming your Guest model has an email field
      slackId: guest.slackId, // Assuming your Guest model has a slackId field
    };
  } catch (error) {
    throw new Error(`Error fetching guest details: ${error.message}`);
  }
};

module.exports = {
  createGuest,
  getAllGuestsForEvent,
  getGuestById,
};
