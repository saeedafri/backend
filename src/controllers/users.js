// src/controllers/usersController.js

const express = require("express");
const User = require("../models/user"); // Adjust the path according to your project structure
const logger = require("../utils/logger"); // Ensure this path matches where your logger.js is located

// Create a new user
let createUser = async (req, res) => {
  const { firstName, lastName, email, slackId } = req.body;

  try {
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      slackId,
    });
    logger.info(
      `User created successfully. First Name: ${firstName}, Last Name: ${lastName}, Email: ${email}, Slack ID: ${slackId}`
    );
    res.status(201).json(newUser);
  } catch (error) {
    logger.error(`Error creating user: ${error.message}`);
    res
      .status(500)
      .json({ error: "An error occurred while creating the user." });
  }
};

// Get all users
let getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    logger.info(`Fetched all users.`);
    res.status(200).json(users);
  } catch (error) {
    logger.error(`Error fetching users: ${error.message}`);
    res
      .status(500)
      .json({ error: "An error occurred while fetching the users." });
  }
};

module.exports = {
  createUser,
  getAllUsers,
};
