const inquirer = require("inquirer");
const fs = require('fs');
const generateHTML = require("../generateHTML.js");
const Employee = require("./lib/employee")
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Prompt = require("./lib/questions");

let teamArray = [];

const prompt = new Prompt();

// Initialize the app
// function newCard () {
//     prompt.Prompt().then((res) => {
       
//     });
// }

function getEmployee() {
    prompt.questionPrompt().then((res) => {
       // card.push(new Employee(res.name, res.id, res.email, res.number));
       if (res.employee == "engineer") getEngineer();
       if (res.employee == "manager") getManager();
       if (res.employee == "intern") getIntern();
       if (res.employee == "done") createHtml();
        // promptMenu();
    });
}

function getManager() {
    prompt.managerQuestions().then((res) => {
        teamArray.push(new Manager(res.name, res.id, res.email, res.number));
        console.log(teamArray);
        getEmployee();
    });
}

function getEngineer() {
    prompt.engineerQuestions().then((res) => {
        teamArray.push(new Engineer(res.name, res.id, res.email, res.github));
        console.log(teamArray);
        getEmployee();
    });
}

function getIntern() {
    prompt.internQuestions().then((res) => {
        teamArray.push(new Intern(res.name, res.id, res.email, res.school));
        console.log(teamArray);
        getEmployee();
    });
}

function createHtml() {
    console.log("generating Team Card...");
    fs.writeFileSync("index.html", generateHTML(teamArray));
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