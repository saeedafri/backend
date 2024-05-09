module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Documents", [
      {
        fileName: "Project Proposal.pdf",
        filePath: "/uploads/project-proposal.pdf",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fileName: "Meeting Notes.docx",
        filePath: "/uploads/meeting-notes.docx",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Documents", null, {});
  },
};
