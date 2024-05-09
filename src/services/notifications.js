const axios = require("axios");
const { sendEmail } = require("./emailService");
const { sendSlackMessage } = require("./slackService");
const { getGuestById } = require("../controllers/guests");
const logger = require("../utils/logger");

async function notifyGuests(eventDetails) {
  const {
    eventGuestIDs,
    guestNotificationType,
    reminderDurationMinutes,
    eventDate,
    eventTime,
  } = eventDetails;

  const reminderTime = new Date(eventDate);
  reminderTime.setMinutes(reminderTime.getMinutes() - reminderDurationMinutes);

  const currentTime = new Date();

  if (currentTime >= reminderTime) {
    for (const guestID of eventGuestIDs) {
      const guestDetails = await getGuestById(guestID);
      if (guestDetails.email && guestNotificationType === "email") {
        await sendEmail(
          guestDetails.email,
          `Reminder for ${guestDetails.guestName} on ${eventDate} at ${eventTime}`
        );
        logger.info(
          `Sent email reminder to ${guestDetails.email} for event on ${eventDate} at ${eventTime}`
        );
      } else if (guestDetails.slackId && guestNotificationType === "slack") {
        await sendSlackMessage(
          guestDetails.slackId,
          `Reminder for ${guestDetails.guestName} on ${eventDate} at ${eventTime}`
        );
        logger.info(
          `Sent Slack message to ${guestDetails.slackId} for event on ${eventDate} at ${eventTime}`
        );
      }
    }
  } else {
    logger.info(
      "It's too early to send reminders. Current time:",
      currentTime,
      "Reminder time:",
      reminderTime
    );
  }
}

module.exports = {
  notifyGuests,
};
