// src/services/eventService.js
const { Op } = require("sequelize");
const Event = require("../models/event"); // Adjust the path according to your project structure

async function checkVenueAvailability(venue, startTime, endTime) {
  const overlappingEvents = await Event.findAll({
    where: {
      locationId: venue.id,
      [Op.and]: [
        { date: { [Op.gte]: startTime } },
        { date: { [Op.lte]: endTime } },
      ],
    },
  });

  return overlappingEvents.length > 0;
}

module.exports = {
  checkVenueAvailability,
};
