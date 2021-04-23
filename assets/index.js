const inquirer = require("inquirer");
const fs = require('fs');
const generateHTML = require("../generateHTML.js");
 
// Array of employee questions
const employeeQuestions = [
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
        name: 'type',
        message: 'What type of employee are you?',
        choices: ['manager', 'engineer', 'intern', 'assistant to the manager'],
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