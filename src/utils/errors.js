// utils/errors.js

class ControllerError extends Error {
  constructor(errorCode, errorMessage) {
    super(errorMessage);
    this.errorCode = errorCode;
    this.name = "ControllerError";
  }

  toString() {
    return JSON.stringify({
      errorCode: this.errorCode,
      message: this.message,
    });
  }
}

module.exports = ControllerError;
