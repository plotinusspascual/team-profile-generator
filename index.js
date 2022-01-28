const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const generateHTML = require('./src/generateHTML');

const inquirer = require('inquirer');
const fs = require('fs');


// Holds the team members info
const team = [];


// GIVEN a command-line application that accepts user input
function addManager(){  
  inquirer
    .prompt([
    // WHEN I start the application
    // THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
      {
        type: "input",
        message: "Enter team manager's name: ",
        name: "name"
      },
      {
        type: "input",
        message: "Enter team manager's employee ID: ",
        name: "id"
      },
      {
        type: "input",
        message: "Enter team manager's email: ",
        name: "email"
      },
      {
        type: "input",
        message: "Enter team manager's office number: ",
        name: "officeNumber"
      },
    ])
    .then(function({name, id, email, officeNumber, role}) {
      let manager;
      role = "manager";
      manager = new Manager(name, id, email, officeNumber, role);
      team.push(manager);
    })
    .then(addEmployee);
};    
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, 
  //    and I am taken back to the menu  
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, 
//    and I am taken back to the menu

  // WHEN I enter the team manager’s name, employee ID, email address, and office number
  // THEN I am presented with a menu with the option to add an engineer or an intern or 
  //    to finish building my team  
function addEmployee(){  
  inquirer
    .prompt([
      // WHEN I select the engineer option
      // THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, 
        //    and I am taken back to the menu  
      // WHEN I select the intern option
      // THEN I am prompted to enter the intern’s name, ID, email, and school, 
      //    and I am taken back to the menu
      {
        type: "list",
        message: "Which role do you want to add to your team?",
        choices: ["Engineer", "Intern"],
        name: "role"
      },
      {
        type: "input",
        name: "name",
        message: "Enter employee's name: "
      },
      {
        type: "input",
        message: "Enter employee's ID: ",
        name: "id"
      },
      {
        type: "input",
        message: "Enter employee's email: ",
        name: "email"
      },
      {
        type: "input",
        message: "Enter engineer's github: ",
        name: "github",
        when: (input) => input.role === "Engineer"
      },
      {
        type: "input",
        message: "Enter intern's school: ",
        name: "school",
        when: (input) => input.role === "Intern"
      },
      {
        type: "list",
        message: "Would you like to add more members?",
        choices: ["yes", "no"],
        name: "confirm"
      }
    ])
    .then(function({name, id, email, role, github, school}){
      let employee;

      if(role === "Engineer"){
        employee = new Engineer(name, id, email, github);
      }else if(role === "Intern"){
        employee = new Intern(name, id, email, school);
      }
      team.push(employee);
      
    })
    // WHEN I decide to finish building my team
    // THEN I exit the application, and the HTML is generated
    .then(function(confirm){
      if(confirm === "yes"){
        addEmployee();
      }else{
        console.log(team);
        generateHTML(team);
        writeFile(generateHTML(team));
      }
    });
};

function writeFile(data){
  fs.writeFile('./dist/index.html', data, err => {
      if (err) {
          console.log(err);
          return;
      } else {
          console.log("Sucess!");
      }
  })
};

addManager()