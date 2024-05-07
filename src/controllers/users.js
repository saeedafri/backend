// src/controllers/usersController.js

const express = require("express");
const User = require("../models/user"); // Adjust the path according to your project structure

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
    res.status(201).json(newUser);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while creating the user." });
  }
};

// Get all users
let getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching the users." });
  }
};

module.exports = {
  createUser,
  getAllUsers,
};
