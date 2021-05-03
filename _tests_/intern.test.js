const Intern = require("../lib/intern");

describe("intern", () => {
    it("Returns the name of the intern", () => {
        const firstName = "Ryan";
        const novice = new Intern(firstName, 004, "rhoward@dundermifflin.com");
        expect(novice.getName()).toEqual(firstName); 
    });
});

describe("intern", () => {
    it("Returns the role of the intern", () => {
        const novice = new Intern("Ryan", 004, "rhoward@dundermifflin.com");
        expect(novice.getRole()).toEqual("intern");
    });
});

describe("intern", () => {
    it("Returns the id of the intern", () => {
        const employId = 004;
        const novice = new Intern("Ryan", employId, "rhoward@dundermifflin.com");
        expect(novice.getId()).toEqual(employId);
    });
});

describe("intern", () => {
    it("Returns the email of the intern", () => {
        const employEmail = "rhoward@dundermifflin.com";
        const novice = new Intern("Ryan", 004, employEmail);
        expect(novice.getEmail()).toEqual(employEmail);
    });
});
