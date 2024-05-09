const { Op } = require("sequelize");
const Event = require("../models/event");
const logger = require("../utils/logger");

async function checkVenueAvailability(venue, startTime, endTime) {
  logger.info(
    `Checking venue availability for venue ID: ${venue.id} between ${startTime} and ${endTime}`
  );

  const overlappingEvents = await Event.findAll({
    where: {
      locationId: venue.id,
      [Op.and]: [
        { date: { [Op.gte]: startTime } },
        { date: { [Op.lte]: endTime } },
      ],
    },
  });

  const isAvailable = overlappingEvents.length === 0;
  logger.info(
    `Venue availability check result: ${
      isAvailable ? "Available" : "Not Available"
    }`
  );

  return isAvailable;
}

module.exports = {
  checkVenueAvailability,
};
