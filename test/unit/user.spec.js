import sinon from "sinon";
import { expect } from "chai";
import User from "../../src/models/user";
describe("User Model", () => {
  describe("Creation", () => {
    it("should create a new user", async () => {
      const newUser = {
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        slackId: "JD123",
      };

      const createUserStub = sinon.stub(User, "create").resolves(newUser);

      const createdUser = await User.create(newUser);

      expect(createdUser).to.deep.equal(newUser);
      expect(createUserStub.calledOnce).to.be.true;

      createUserStub.restore();
    });
  });

  describe("Fetching All Users", () => {
    it("should fetch all users", async () => {
      const users = [
        {
          id: 1,
          firstName: "John",
          lastName: "Doe",
          email: "john.doe@example.com",
          slackId: "JD123",
        },
        {
          id: 2,
          firstName: "Jane",
          lastName: "Doe",
          email: "jane.doe@example.com",
          slackId: "JD456",
        },
      ];

      const findAllUsersStub = sinon.stub(User, "findAll").resolves(users);

      const fetchedUsers = await User.findAll();

      expect(fetchedUsers).to.deep.equal(users);
      expect(findAllUsersStub.calledOnce).to.be.true;

      findAllUsersStub.restore();
    });
  });
});
