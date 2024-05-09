const express = require("express");
const router = express.Router();
const { createUser, getAllUsers } = require("../controllers/users");
const logger = require("../utils/logger");

router.post("/addUser", (req, res, next) => {
  const requestBody = JSON.stringify(req.body);
  logger.info(`Received POST request to /addUser with body: ${requestBody}`);
  createUser(req, res, next);
});

router.get("/getAllUsersList", (req, res, next) => {
  logger.info(`Received GET request to /getAllUsersList. Fetching all users.`);
  getAllUsers(req, res, next);
});

module.exports = router;
