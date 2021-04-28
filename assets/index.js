const inquirer = require("inquirer");
const fs = require('fs');
const generateHTML = require("../generateHTML.js");
const Employee = require("./lib/employee")
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Prompt = require("./lib/questions");

const prompt = new Prompt();

// Initialize the app
function newCard () {
    prompt.Prompt().then((res) => {
        if (res.prompt == "Engineer") getEngineer();
        if (res.prompt == "Manager") getManager();
        if (res.prompt == "Intern") getIntern();
        if (res.prompt == "done") generateHTML();
    });
}

function getEmployee() {
    prompt.questionPrompt().then((res) => {
        card.push(new Employee(res.name, res.id, res.email, res.number));
        promptMenu();
    });
}

function getManager() {
    prompt.managerQuestions().then((res) => {
        card.push(new Manager(res.name, res.id, res.email, res.number));
        promptMenu();
    });
}

function getEngineer() {
    prompt.engineerQuestions().then((res) => {
        card.push(new Engineer(res.name, res.id, res.email, res.github));
        promptMenu();
    });
}

function getIntern() {
    prompt.internQuestions().then((res) => {
        card.push(new Intern(res.name, res.id, res.email, res.school));
        promptMenu();
    });
}

function createCard() {
    console.log("generating Team Card...");
    const card = new Card();
    generateHTML(card);
}





getEmployee();

// Function to initialize the app
// function newCard () {
//     inquirer.prompt(Prompt)
//     .then((data) => {
//         writeToFile("index.html", generateHTML(data));
//     })
//     .catch((err) => console.log(err));

// }

// Function call to initialize the app
// init();