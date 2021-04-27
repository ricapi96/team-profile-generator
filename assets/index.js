const inquirer = require("inquirer");
const fs = require('fs');
const generateHTML = require("../generateHTML.js");

const {
    employeeQuestions,
    managerQuestions,
    engineerQuestions,
    internQuestions,
} = require("./lib/questions.js");

function Cards(status, questionType) {
    this.status = status;
    this.questionType = questionType;
    this.generateCard = () => {
        console.log(`Create a team card by answering the following questions about the employees ${this.status} and ${this.questionType}.`);
    };
}

const newbie = new Cards ('Manager', managerQuestions);

newbie.generateCard();
 


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