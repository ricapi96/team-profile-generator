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
      <!-- Bootstrap -->
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
      <!-- Font Awesome -->
      <link rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
      crossorigin="anonymous"
    />
      <!-- CSS Stylesheet -->
      <link rel="stylesheet" href="./style.css"/>
  </head>
  <body>
    <!-- Heading -->
      <div class="jumbotron">
      <h1 class="text-center">My Team</h1>
  
    <!-- Manager Card -->
          <div class="container">
              <div class="row justify-content-center">
                <div class="col-md-4">
                  <div class="card shadow mt-5" style="width: 18rem">
                      <div class="card-body bg-primary text-white">
                        <h3 class="card-title">Michael</h3>
                        <!-- Title and Icon -->
            <h4 class="card-text"><i class="fas fa-user-tie"></i> Manager</h4>
                      </div>
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: 001</li>
                        <li class="list-group-item">Email: mscott@dm.com </li>
                        <li class="list-group-item">Office number: 101</li>
                      </ul>
                    </div>
                </div>
                
     <!-- Employee 1 Card -->
     <div class="col-md-4">
      <div class="card shadow mt-5" style="width: 18rem">
          <div class="card-body bg-primary text-white">
            <h3 class="card-title">Dwight</h3>
            <!-- Title and Icon -->
            <h4 class="card-text"><i class="fas fa-user"></i> Engineer</h4>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Id: 002</li>
            <li class="list-group-item">Email: ds@dm.com</li>
            <li class="list-group-item">Github: beetBoy</li>
          </ul>
        </div>
    </div>
    
    <!-- Employee 2 Card -->
    <div class="col-md-4">
      <div class="card shadow mt-5" style="width: 18rem">
          <div class="card-body bg-primary text-white">
            <h3 class="card-title">Jimothy</h3>
            <!-- Title and Icon -->
            <h4 class="card-text"><i class="fas fa-user"></i> Engineer</h4>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Id: 003</li>
            <li class="list-group-item">Email: jim@dm.com</li>
            <li class="list-group-item">Github: frankNbeans</li>
          </ul>
        </div>
    </div>
    
    <!-- Employee 3 Card -->
    <div class="col-md-4">
      <div class="card shadow mt-5" style="width: 18rem">
          <div class="card-body bg-primary text-white">
            <h3 class="card-title">Toby</h3>
            <!-- Title and Icon -->
            <h4 class="card-text"><i class="fas fa-user"></i> Engineer</h4>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Id: 004</li>
            <li class="list-group-item">Email: toby@dm.com</li>
            <li class="list-group-item">Github: tobyss</li>
          </ul>
        </div>
    </div>
    
    <!-- Employee 4 Card -->
    <div class="col-md-4">
      <div class="card shadow mt-5" style="width: 18rem">
          <div class="card-body bg-primary text-white">
            <h3 class="card-title">Ryan</h3>
            <!-- Title and Icon -->
            <h4 class="card-text"><i class="fas fa-user-graduate"></i> Intern</h4>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Id:005</li>
            <li class="list-group-item">Email: ryan@dm.com</li>
            <li class="list-group-item">School: Scranton</li>
          </ul>
        </div>
    </div>
    </div>
              </div>
            </div>
       
  
  
  
  
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
  </body>
  </html>`
};

// ${renderEmployeeCard(team)}