const Manager = require("../lib/manager");

describe("manager", () => {
    it("Returns the name of the manager", () => {
        const firstName = "Michael";
        const novice = new Manager(officeName, 001, "mscott@dm.com");
        expect(novice.getName()).toEqual(firstName); 
    });
});

describe("manager", () => {
    it("Returns the role of the manager", () => {
        const novice = new Manager("Michael", 001, "mscott@dm.com");
        expect(novice.getRole()).toEqual("manager");
    });
});

describe("manager", () => {
    it("Returns the id of the manager", () => {
        const employId = 001;
        const novice = new Manager("Michael", employId, "mscott@dm.com");
        expect(novice.getId()).toEqual(employId);
    });
});

describe("manager", () => {
    it("Returns the email of the manager", () => {
        const employEmail = "mscott@dm.com";
        const novice = new Manager("Michael", 001, employEmail);
        expect(novice.getEmail()).toEqual(employEmail);
    });
});
