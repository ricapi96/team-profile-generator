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
 


// Function to write HTML file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Creating Employee Cards...")
    );
},

// Function to initialize the app
function init () {
    inquirer.prompt(employeeQuestions)
    .then((data) => {
        writeToFile("index.html", generateHTML(data));
    })
    .catch((err) => console.log(err));

},

// Function call to initialize the app
init();