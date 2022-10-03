// Generate Profiles function
function generateProfiles(data) {

  // Generate Manager Function
  function generateManager(manager) {
    return `
  <div class=" cardT col-sm-4">
  <div class="card " style="width: 16rem;">
      <div class="card-header" style="height: 5rem;">
         ${manager.getName()}
      <p> Position: ${manager.getRole()}</p>
      </div>
      <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${manager.getId()}</li>
          <li class="list-group-item">e-mail: ${manager.getEmail()}</li>
          <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
      </ul>
  </div>
</div>
`;
  };

  // Generate Engineer Function
  function generateEngineer(engineer) {
    return `
<div class=" cardT col-sm-4">
<div class="card " style="width: 16rem;">
  <div class="card-header" style="height: 5rem;">
     ${engineer.getName()}
  <p> Position: ${engineer.getRole()}</p>
  </div>
  <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${engineer.getId()}</li>
      <li class="list-group-item">e-mail: ${engineer.getEmail()}</li>
      <li class="list-group-item">GitHub: ${engineer.getGithub()}</li>
  </ul>
</div>
</div>
`;
  };

  //Generate Intern Function
  function generateIntern(intern) {
    return `
<div class=" cardT col-sm-4">
<div class="card " style="width: 16rem;">
  <div class="card-header" style="height: 5rem;">
    ${intern.getName()}
  <p> Position: ${intern.getRole()}</p>
  </div>
  <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${intern.getId()}</li>
      <li class="list-group-item">e-mail: ${intern.getEmail()}</li>
      <li class="list-group-item">School: ${intern.getSchool()}</li>
  </ul>
</div>
</div>
`;
  };

  // Profiles Array + Filter and Join the card to the html file
  profilesArray = [];

  profilesArray.push(data
    .filter(employee => employee.getRole() === "Manager")
    .map(manager => generateManager(manager))
  );
  profilesArray.push(data
    .filter(employee => employee.getRole() === "Engineer")
    .map(engineer => generateEngineer(engineer))
  );
  profilesArray.push(data
    .filter(employee => employee.getRole() === "Intern")
    .map(intern => generateIntern(intern))
  );

  return profilesArray.join("");


}

// Generate full html with Manager's, Engineer's and Intern's cards - depending on the user's choice
function profileCards(data) {
  return `
    <!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
      <link rel="stylesheet" href="./dist/style.css">
      <title>Document</title>
  </head>
  
  <body>
  <!--Header-->
      <header>
      <div class="jumbotron jumbotron-fluid" id="headerJumbo">
          <div class="container">
            <h1 class="display-4">My Team</h1>
            <p class="lead"></p>
          </div>
        </div>
      </header>

      <div class="row" id="cardsTeam">
      ${generateProfiles(data)}         
      </div>
      
      </body>
  
      </html>
      `
}

module.exports = profileCards
