const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const inquirer = require('inquirer');
const fs = require('fs');

// Holds the team members info
const team = [];

// GIVEN a command-line application that accepts user input
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
  // WHEN I enter the team manager’s name, employee ID, email address, and office number
  // THEN I am presented with a menu with the option to add an engineer or an intern or 
  //    to finish building my team
    {
      type: "list",
      message: "What team member role do you want to add? ",
      choices: ["Engineer", "Intern"],
      name: "role"
    }
  ])
  .then(function({name, id, email, officeNumber}) {
    let manager;

    manager = new Manager(name, id, email, officeNumber);
    console.log(manager);
    team.push(manager);
  })
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, 
  //    and I am taken back to the menu  
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, 
//    and I am taken back to the menu




// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated


// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab

// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input