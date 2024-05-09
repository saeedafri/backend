const express = require("express");
const cors = require("cors");
const app = express();
const db = require("../src/config/db");
const sequelize = require("./config/db");
const { User, Location, Event, Guest, Document } = require("../src/models");
const {
  userRoutes,
  locationRoutes,
  eventRoutes,
  guestRoutes,
  documentRoutes,
} = require("../src/routes");
require("dotenv").config();
const logger = require("./utils/logger");
app.use(express.json());
logger.info("Application started");

const apiRoutes = express.Router();
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

apiRoutes.use("/users", userRoutes);
apiRoutes.use("/events", eventRoutes);
apiRoutes.use("/locations", locationRoutes);
apiRoutes.use("/guests", guestRoutes);
apiRoutes.use("/documents", documentRoutes);

app.use("/api", apiRoutes);

sequelize
  .sync()
  .then(() => {
    logger.info("Database & tables created successfully");
  })
  .catch((err) => {
    logger.error("Error creating database & tables:", err);
  });

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});
