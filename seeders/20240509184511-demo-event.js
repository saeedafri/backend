module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Check if the Events table exists
    const tableExists = await queryInterface.describeTable("Events");

    if (!tableExists) {
      console.log(
        "Events table does not exist. Please create the table first."
      );
      return;
    }

    return queryInterface.bulkInsert("Events", [
      {
        eventName: "Conference",
        eventDescription: "A conference on the latest technology trends.",
        eventDate: new Date(),
        eventTime: "10:00:00",
        eventDuration: "120",
        eventLocationName: "Tech Center",
        eventGuestIDs: JSON.stringify(["guest1", "guest2"]),
        guestNotificationType: "Email",
        reminderDurationMinutes: "60",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        eventName: "Workshop",
        eventDescription: "A hands-on workshop on web development.",
        eventDate: new Date(),
        eventTime: "14:00:00",
        eventDuration: "90",
        eventLocationName: "Coding Lab",
        eventGuestIDs: JSON.stringify(["guest3", "guest4"]),
        guestNotificationType: "Slack",
        reminderDurationMinutes: "30",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Events", null, {});
  },
};
