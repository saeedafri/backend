// src/routes/users.js

const express = require("express");
const router = express.Router();
const { createUser, getAllUsers } = require("../controllers/users");

router.post("/addUser", createUser); // Register a new user
router.get("/getAllUsersList", getAllUsers); // Get all users

// Export the router
module.exports = router;
