const express = require("express");
const cors = require("cors");
const app = express();
const setupDatabase = require("./config/setUpDatabase");
const logger = require("./utils/logger");
const {
  locationRoutes,
  eventRoutes,
  guestRoutes,
  documentRoutes,
} = require("../src/routes");
require("dotenv").config();

app.use(express.json());

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use((err, req, res, next) => {
  logger.error("An error occurred:", err);
  res.status(500).json({ error: "Internal Server Error" });
});

const apiRoutes = express.Router();
apiRoutes.use("/events", eventRoutes);
apiRoutes.use("/locations", locationRoutes);
apiRoutes.use("/guests", guestRoutes);
apiRoutes.use("/documents", documentRoutes);
app.use("/api", apiRoutes);

setupDatabase()
  .then(() => {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      logger.info(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    logger.error("Error setting up the database:", error);
    process.exit(1);
  });
