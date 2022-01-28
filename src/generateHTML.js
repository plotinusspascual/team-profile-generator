// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab

// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
const generateManager = function(manager){
  return `
  <div class="container col-4">
    <div id="manager">
    <h2>${manager.name}</h2>
      <h3>Manager</h3>
      <p class="id">Employee ID: ${manager.id}</p>
      <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
      <p class="office">Office Number: ${manager.officeNumber}</p>
    </div>
  </div>
  `;
}

const generateEngineer = function(engineer){
  return `
  <div class="container col-4">
    <div id="engineer">
    <h2>${engineer.name}</h2>
      <h3>Engineer</h3>
      <p class="id">Employee ID: ${engineer.id}</p>
      <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
      <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
    </div>
  </div>
  `;
}

const generateIntern = function(intern){
  return `
  <div class="container col-4">
    <div id="intern">
    <h2>${intern.name}</h2>
      <h3>Intern</h3>
      <p class="id">Employee ID: ${intern.id}</p>
      <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
      <p class="office">School: ${intern.school}</p>
    </div>
  </div>
  `;
}

generateHTML = (data) => {
  pageArray = []; 

  for(let i = 0; i < data.length; i++){
    const employee = data[i];
    const role = employee.getRole(); 
      
    if(role === 'Manager'){
      const managerCard = generateManager(employee);
      pageArray.push(managerCard);
    }
    if(role === 'Engineer'){
      const engineerCard = generateEngineer(employee);
      pageArray.push(engineerCard);
    }
    if (role === 'Intern') {
    const internCard = generateIntern(employee);
    pageArray.push(internCard);
    }
  }

  const employeeCards = pageArray.join('');
  const generateTeam = generate(employeeCards); 
  return generateTeam;
}
const generate = function(employeeCards){
 return`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">

    <title>My Team</title>
  </head>
  <body>
    <header>
      <div class="jumbotron text-center">
        <h1>The Team</h1>
      </div>
    </header>
    <main>
      <div class="container">
        <div class="row justify-content-center">
          ${employeeCards}
        </div>
      </div>
    </main>
  </body>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  </html>`;
} 
module.exports = generateHTML;      