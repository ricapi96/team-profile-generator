const Employee = require("../lib/employee");

describe("employee", () => {
    it("Returns the name of the employee", () => {
        const firstName = "Michael";
        const novice = new Employee(officeName, 001, "mscott@dm.com");
        expect(novice.getName()).toEqual(firstName); 
    });
});

describe("employee", () => {
    it("Returns the role of the employee", () => {
        const novice = new Employee("Michael", 001, "mscott@dm.com");
        expect(novice.getRole()).toEqual("employee");
    });
});

describe("employee", () => {
    it("Returns the id of the employee", () => {
        const employId = 001;
        const novice = new Employee("Michael", employId, "mscott@dm.com");
        expect(novice.getId()).toEqual(employId);
    });
});

describe("employee", () => {
    it("Returns the email of the employee", () => {
        const employEmail = "mscott@dm.com";
        const novice = new Employee("Michael", 001, employEmail);
        expect(novice.getEmail()).toEqual(employEmail);
    });
});
