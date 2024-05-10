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
        eventDate: "1937-01-01",
        eventTime: "10:00:00",
        eventDuration: "120",
        eventLocationName: "Tech Center",
        eventGuestIDs: JSON.stringify(["guest1", "guest2"]),
        guestNotificationType: "Email",
        reminderDurationMinutes: "60",
        createdAt: "1937-01-01",
        updatedAt: "1937-01-01",
      },
      {
        eventName: "Workshop",
        eventDescription: "A hands-on workshop on web development.",
        eventDate: "1937-01-01",
        eventTime: "14:00:00",
        eventDuration: "90",
        eventLocationName: "Coding Lab",
        eventGuestIDs: JSON.stringify(["guest3", "guest4"]),
        guestNotificationType: "Slack",
        reminderDurationMinutes: "30",
        createdAt: "1937-01-01",
        updatedAt: "1937-01-01",
      },
      {
        eventName: "Seminar",
        eventDescription:
          "A seminar on artificial intelligence and machine learning.",
        eventDate: "1937-01-01",
        eventTime: "09:00:00",
        eventDuration: "180",
        eventLocationName: "Tech Hub",
        eventGuestIDs: JSON.stringify(["guest5", "guest6"]),
        guestNotificationType: "Email",
        reminderDurationMinutes: "45",
        createdAt: "1937-01-01",
        updatedAt: "1937-01-01",
      },
      {
        eventName: "Hackathon",
        eventDescription:
          "A hackathon focused on developing innovative solutions.",
        eventDate: "1937-01-01",
        eventTime: "18:00:00",
        eventDuration: "240",
        eventLocationName: "Innovation Center",
        eventGuestIDs: JSON.stringify(["guest7", "guest8"]),
        guestNotificationType: "Slack",
        reminderDurationMinutes: "30",
        createdAt: "1937-01-01",
        updatedAt: "1937-01-01",
      },
      {
        eventName: "Webinar",
        eventDescription: "A webinar on cybersecurity best practices.",
        eventDate: "1937-01-01",
        eventTime: "11:00:00",
        eventDuration: "120",
        eventLocationName: "Digital Campus",
        eventGuestIDs: JSON.stringify(["guest9", "guest10"]),
        guestNotificationType: "Email",
        reminderDurationMinutes: "60",
        createdAt: "1937-01-01",
        updatedAt: "1937-01-01",
      },
      {
        eventName: "Bootcamp",
        eventDescription: "A bootcamp on mobile app development.",
        eventDate: "1937-01-01",
        eventTime: "15:00:00",
        eventDuration: "150",
        eventLocationName: "Cyber Park",
        eventGuestIDs: JSON.stringify(["guest11", "guest12"]),
        guestNotificationType: "Slack",
        reminderDurationMinutes: "30",
        createdAt: "1937-01-01",
        updatedAt: "1937-01-01",
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Events", null, {});
  },
};
