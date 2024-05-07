// app.js

const express = require("express");
const app = express();
const db = require("../src/config/db"); // Import your Sequelize instance
const sequelize = require("./config/db");
const { User, Location, Event, Guest, Document } = require("../src/models"); // Import your models
const {
  userRoutes,
  locationRoutes,
  eventRoutes,
  guestRoutes,
  documentRoutes,
} = require("../src/routes"); // Import your routes

// app.js
// Use express.json() middleware
app.use(express.json());
const apiRoutes = express.Router();

apiRoutes.use("/users", userRoutes);
apiRoutes.use("/events", eventRoutes);
apiRoutes.use("/locations", locationRoutes);
apiRoutes.use("/guests", guestRoutes);
apiRoutes.use("/documents", documentRoutes);

app.use("/api", apiRoutes);
sequelize
  .sync()
  .then(() => console.log("Database & tables created"))
  .catch((err) => console.error("Error creating database & tables:", err));
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
