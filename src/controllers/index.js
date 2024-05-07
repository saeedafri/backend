// src/controllers/index.js

const express = require("express");
const router = express.Router();

// Assuming each controller exports an object with methods like create, getAll, etc.
const controllers = {
  UserController: require("./users"),
  LocationController: require("./locations"),
  EventController: require("./events"),
  GuestController: require("./guests"),
  DocumentController: require("./documents"),
};

Object.keys(controllers).forEach((controllerName) => {
  const controller = controllers[controllerName];
  Object.keys(controller).forEach((methodName) => {
    const method = controller[methodName];
    // Adjusted to include route parameters
    router[method.methodName.toLowerCase()](...method.path, method.handler);
  });
});

module.exports = router;
