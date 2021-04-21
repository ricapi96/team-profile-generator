const inquirer = require("inquirer");
const fs = require('fs');
const generateHTML = require("./utils/generateHTML.js");
 

// Function to write HTML file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Creating Employee Cards...")
    );
}

// Function to initialize the app
function init () {
    inquirer.prompt(employeeQuestion)
    .then((data) => {
        writeToFile("cards.html", generateHTML(data));
    })
    .catch((err) => console.log(err));

}

// Function call to initialize the app
init();