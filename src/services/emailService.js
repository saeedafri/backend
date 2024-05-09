const logger = require("../utils/logger");
const nodemailer = require("nodemailer");

async function sendEmail(to, subject, text) {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  try {
    let info = await transporter.sendMail({
      from: process.env.EMAIL_USERNAME,
      to,
      subject,
      text,
    });

    logger.info(
      `Email sent successfully to ${to}. Message ID: ${info.messageId}`
    );
  } catch (error) {
    logger.error(`Failed to send email to ${to}. Error: ${error.message}`);
  }
}

module.exports = {
  sendEmail,
};
