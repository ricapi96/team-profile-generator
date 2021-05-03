const Engineer = require("../lib/engineer");

describe("engineer", () => {
    it("Returns the name of the engineer", () => {
        const firstName = "Jimothy";
        const novice = new Engineer(firstName, 002, "jhalpert@dundermifflin.com");
        expect(novice.getName()).toEqual(firstName); 
    });
});

describe("engineer", () => {
    it("Returns the role of the engineer", () => {
        const novice = new Engineer("Jimothy", 002, "jhalpert@dundermifflin.com");
        expect(novice.getRole()).toEqual("engineer");
    });
});

describe("engineer", () => {
    it("Returns the id of the engineer", () => {
        const employId = 002;
        const novice = new Employee("Michael", employId, "jhalpert@dundermifflin.com");
        expect(novice.getId()).toEqual(employId);
    });
});

describe("engineer", () => {
    it("Returns the email of the engineer", () => {
        const employEmail = "jhalpert@dundermifflin.com";
        const novice = new Employee("Jimothy", 002, employEmail);
        expect(novice.getEmail()).toEqual(employEmail);
    });
});
