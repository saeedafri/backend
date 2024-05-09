// utils/slackService.js or services/slackService.js

const { WebClient } = require("@slack/web-api");
const logger = require("../utils/logger");
const token = process.env.SLACK_TOKEN || "";
const web = new WebClient(token);

async function sendSlackMessage(channelId, text) {
  try {
    const result = await web.chat.postMessage({
      channel: channelId,
      text,
    });

    logger.info(
      `Sent Slack message to channel ${channelId}. Timestamp: ${result.ts}`
    );
  } catch (error) {
    logger.error(
      `Failed to send Slack message to channel ${channelId}. Error: ${error.message}`
    );
  }
}

module.exports = {
  sendSlackMessage,
};
