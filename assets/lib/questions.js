const inquirer = require("inquirer");
class Prompt {
    questionPrompt() {
        return inquirer.prompt([
            {
                type: 'list',
                name: 'employee',
                message: 'What type of employee would you like in your team?',
                choices: ['manager', 'engineer', 'intern', 'done'],
            },
            
        ]);
    }

     

// Manager Questions
managerQuestions() {
    return inquirer.prompt( [
    {
        type: 'input',
        name: 'name',
        message: "What is the manager's name?",
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the manager's employee id?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the manager's email?",
    },
    {
        type: 'input',
        name: 'number',
        message: "What is the manager's office number?",
    },
]);
}

// Engineer Questions
engineerQuestions() {
    return inquirer.prompt( [
    {
        type: 'input',
        name: 'name',
        message: "What is the engineer's name?",
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the engineer's employee id?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the engineer's email?",
    },
    {
        type: 'input',
        name: 'github',
        message: "What is the engineer's github username?",
    },
]);
}

// Intern Questions
internQuestions() {
    return inquirer.prompt( [
    {
        type: 'input',
        name: 'name',
        message: "What is the intern's name?",
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the intern's employee id?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the intern's email?",
    },
    {
        type: 'list',
        name: 'school',
        message: 'What school does the intern attend?',
    },
]);
}
}

module.exports = Prompt;