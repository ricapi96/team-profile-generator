const inquirer = require("inquirer");
const fs = require('fs');
const generateHTML = require("../generateHTML.js");

const {
    employeeQuestions,
    managerQuestions,
    engineerQuestions,
    internQuestions,
} = require("./lib/questions.js");

// function Cards(status, questionType) {
//     this.status = status;
//     this.questionType = questionType;
//     this.generateCard = () => {
//         console.log(`Create a team card by answering the following questions about the employees ${this.status} and ${this.questionType}.`);
//     };
// }

// const newbie = new Cards ('Manager', managerQuestions);

// newbie.generateCard();

const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");


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