// Function to generate HTML

function generateHTML(data) {
    
}

let employee = require("./lib/employee");
let manager = require("./lib/manager");
let engineer = require("./lib/engineer");
let intern = require("./lib/intern");
// const html = [];

// html.push(team
//   .filter(employee => employee.getRole() === "Manager")
//   .map(manager => generateManager(manager))
// );

// Need to take the array of employees and filter it to pull out each specific employee type, then call this function with the specific team member as an argument
function renderEmployeeCard(team) {
    if (employee === manager) {
        return `<div class="container">
        <div class="row row-cols-3">
          <div class="col">
            <div class="card" style="width: 18rem;">
                <div class="card-header">
                  ${managerQuestions, name}
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">id: ${managerQuestions, id}</li>
                  <li class="list-group-item">email: ${managerQuestions, email}</li>
                  <li class="list-group-item">Office #: ${managerQuestions, number}</li>
                </ul>
              </div>
          </div>
          </div><hr>`
    
    } else if (employee === engineer) {
        return `<div class="container">
        <div class="row row-cols-3">
          <div class="col">
            <div class="card" style="width: 18rem;">
                <div class="card-header">
                  ${engineerQuestions, name}
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">id: ${engineerQuestions, id}</li>
                  <li class="list-group-item">email: ${engineerQuestions, email}</li>
                  <li class="list-group-item">Office #: ${engineerQuestions, github}</li>
                </ul>
              </div>
          </div>
          </div><hr>`
    } else if (employee === intern) {
        return `<div class="container">
        <div class="row row-cols-3">
          <div class="col">
            <div class="card" style="width: 18rem;">
                <div class="card-header">
                  ${internQuestions, name}
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">id: ${internQuestions, id}</li>
                  <li class="list-group-item">email: ${internQuestions, email}</li>
                  <li class="list-group-item">Office #: ${internQuestions, school}</li>
                </ul>
              </div>
          </div>
          </div><hr>`
    } else (employee === "none"); {
        return "";
    }
}



function renderEngineerCard() {}


function renderManagerCard() {}


function renderInternCard() {}










module.exports = team => {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    </head>
    <body>
    <div class="jumbotron">
		<h1 class="text-center">My Team</h1>

        <div class="container">
            <div class="row row-cols-3">
              <div class="col">
                <div class="card" style="width: 18rem;">
                    <div class="card-header">
                      ${renderEmployeeCard(team)}
                    </div>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">An item</li>
                      <li class="list-group-item">A second item</li>
                      <li class="list-group-item">A third item</li>
                    </ul>
                  </div>
              </div>
              </div><hr>
              
    
 
   
    
    
    
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
    </body>
    </html>`
};