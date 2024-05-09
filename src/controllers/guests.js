const logger = require("../utils/logger"); // Ensure this path matches where your logger.js is located
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

let updateGuest = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName } = req.body;

  try {
    const [updated] = await Guest.update(
      {
        firstName,
        lastName,
      },
      {
        where: { id: Number(id) },
      }
    );
    if (updated) {
      logger.info(`Guest updated successfully. ID: ${id}`);
      res.status(200).json({ message: "Guest updated successfully." });
    } else {
      res.status(404).json({ message: "Guest not found." });
    }
  } catch (error) {
    logger.error(`Error updating guest: ${error.message}`);
    res
      .status(500)
      .json({ error: "An error occurred while updating the guest." });
  }
};

let deleteGuest = async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await Guest.destroy({
      where: { id: Number(id) },
    });
    if (deleted) {
      logger.info(`Guest deleted successfully. ID: ${id}`);
      res.status(200).json({ message: "Guest deleted successfully." });
    } else {
      res.status(404).json({ message: "Guest not found." });
    }
  } catch (error) {
    logger.error(`Error deleting guest: ${error.message}`);
    res
      .status(500)
      .json({ error: "An error occurred while deleting the guest." });
  }
};

module.exports = {
  createGuest,
  getAllGuestsForEvent,
};
