// src/controllers/index.js

const express = require("express");
const router = express.Router();

const controllers = {
  LocationController: require("./locations"),
  EventController: require("./events"),
  GuestController: require("./guests"),
  DocumentController: require("./documents"),
};

Object.keys(controllers).forEach((controllerName) => {
  const controller = controllers[controllerName];
  Object.keys(controller).forEach((methodName) => {
    const method = controller[methodName];
    router[method.methodName.toLowerCase()](...method.path, method.handler);
  });
});

module.exports = router;
