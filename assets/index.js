const inquirer = require("inquirer");
const fs = require('fs');
const generateHTML = require("../generateHTML.js");
const manager = require("./lib/manager");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");
const {
    employeeQuestions,
    managerQuestions,
    engineerQuestions,
    internQuestions,
} = require("./lib/questions");
 
// Array of All employee questions
employeeQuestions = [
    {
        type: 'list',
        name: 'employee',
        message: 'What type of employee would you like in your team?',
        choices: ['manager', 'engineer', 'intern'],
    }
];

// Manager Questions
managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your id?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },
    {
        type: 'input',
        name: 'office number',
        message: 'What is your office number?',
    },
];

// Engineer Questions
engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your id?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'email?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
    },
];

// Intern Questions
internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your id?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'email?',
    },
    {
        type: 'list',
        name: 'school',
        message: 'What school do you attend?',
    },
];



// Function to write HTML file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Creating Employee Cards...")
    );
}

// Function to initialize the app
function init () {
    inquirer.prompt(employeeQuestions)
    .then((data) => {
        writeToFile("index.html", generateHTML(data));
    })
    .catch((err) => console.log(err));

}

// Function call to initialize the app
init();