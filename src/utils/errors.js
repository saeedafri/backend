// utils/errors.js

class ControllerError extends Error {
  constructor(errorCode, errorMessage) {
    super(errorMessage);
    this.errorCode = errorCode;
    this.name = "ControllerError";
  }

  // Override the toString method to return a JSON object
  toString() {
    return JSON.stringify({
      errorCode: this.errorCode,
      message: this.message,
    });
  }
}

module.exports = ControllerError;
