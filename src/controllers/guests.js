// src/controllers/guestsController.js

const Guest = require("../models/guest"); // Adjust the path according to your project structure

// Create a new guest
let createGuest = async (req, res) => {
  const { firstName, lastName, eventId } = req.body;

  try {
    const newGuest = await Guest.create({
      firstName,
      lastName,
      eventId,
    });
    res.status(201).json(newGuest);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while creating the guest." });
  }
};

// Get all guests for a specific event
let getAllGuestsForEvent = async (_req, res) => {
  // const { eventId } = req.params;

  try {
    // Adjusted to not include associations
    const guests = await Guest.findAll({
      // where: { eventId: Number(eventId) },
    });
    res.status(200).json(guests);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching the guests." });
  }
};

// Update a guest
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
      res.status(200).json({ message: "Guest updated successfully." });
    } else {
      res.status(404).json({ message: "Guest not found." });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while updating the guest." });
  }
};

// Delete a guest
let deleteGuest = async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await Guest.destroy({
      where: { id: Number(id) },
    });
    if (deleted) {
      res.status(200).json({ message: "Guest deleted successfully." });
    } else {
      res.status(404).json({ message: "Guest not found." });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while deleting the guest." });
  }
};

// Corrected export
module.exports = {
  createGuest,
  getAllGuestsForEvent,
};
