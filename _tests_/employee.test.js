const Employee = require("../lib/employee");

describe("employee", () => {
    it("Returns the name of the employee", () => {
        const firstName = "Michael";
        const novice = new Employee(firstName, 1, "mscott@dm.com");
        expect(novice.getName()).toEqual(firstName); 
    });
});

describe("employee", () => {
    it("Returns the role of the employee", () => {
        const testValue = "employee";
        const novice = new Employee("Michael", 1, "mscott@dm.com");
        expect(novice.getRole()).toBe(testValue);
    });
});

describe("employee", () => {
    it("Returns the id of the employee", () => {
        const employId = 1;
        const novice = new Employee("Michael", employId, "mscott@dm.com");
        expect(novice.getId()).toEqual(employId);
    });
});

describe("employee", () => {
    it("Returns the email of the employee", () => {
        const employEmail = "mscott@dm.com";
        const novice = new Employee("Michael", 1, employEmail);
        expect(novice.getEmail()).toEqual(employEmail);
    });
});
