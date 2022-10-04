// Generate Profiles function
function generateProfiles(data) {

  // Generate Manager Function
  function generateManager(manager) {
    return `
   <div class=" cardT col align-self-center">
    <div class="card " style="width: 16rem;">
      <div class="card-header" style="height: 5rem;">
         ${manager.getName()}
         <p>
         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cup-hot"
           viewBox="0 0 16 16">
           <path fill-rule="evenodd"
             d="M.5 6a.5.5 0 0 0-.488.608l1.652 7.434A2.5 2.5 0 0 0 4.104 16h5.792a2.5 2.5 0 0 0 2.44-1.958l.131-.59a3 3 0 0 0 1.3-5.854l.221-.99A.5.5 0 0 0 13.5 6H.5ZM13 12.5a2.01 2.01 0 0 1-.316-.025l.867-3.898A2.001 2.001 0 0 1 13 12.5ZM2.64 13.825 1.123 7h11.754l-1.517 6.825A1.5 1.5 0 0 1 9.896 15H4.104a1.5 1.5 0 0 1-1.464-1.175Z" />
           <path
             d="m4.4.8-.003.004-.014.019a4.167 4.167 0 0 0-.204.31 2.327 2.327 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.31 3.31 0 0 1-.202.388 5.444 5.444 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 3.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 3.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 3 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 4.4.8Zm3 0-.003.004-.014.019a4.167 4.167 0 0 0-.204.31 2.327 2.327 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.31 3.31 0 0 1-.202.388 5.444 5.444 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 6.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 6.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 6 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 7.4.8Zm3 0-.003.004-.014.019a4.077 4.077 0 0 0-.204.31 2.337 2.337 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.198 3.198 0 0 1-.202.388 5.385 5.385 0 0 1-.252.382l-.019.025-.005.008-.002.002A.5.5 0 0 1 9.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 9.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 9 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 10.4.8Z" />
         </svg> ${manager.getRole()}
       </p>
      </div>
      <ul class="list-group list-group-flush">
          <li class="list-group-item"><span class="listItem">ID: </span>${manager.getId()}</li>
          <li class="list-group-item"><span class="listItem">e-mail: </span><a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
          <li class="list-group-item"><span class="listItem">Phone: </span>${manager.getOfficeNumber()}</li>
      </ul>
  </div>
</div>
`;
  };

  // Generate Engineer Function
  function generateEngineer(engineer) {
    return `
		<div class=" cardT col align-self-center">
			<div class="card " style="width: 16rem;">
				<div class="card-header" style="height: 5rem;">
          ${engineer.getName()}
          <p>
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear"
							viewBox="0 0 16 16">
							<path
								d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
							<path
								d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
						</svg> ${engineer.getRole()}
					</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><span class="listItem">ID: </span>${engineer.getId()}</li>
          <li class="list-group-item"><span class="listItem">e-mail: </span><a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
          <li class="list-group-item"><span class="listItem">GitHub: </span><a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
        </ul>
      </div>
    </div>`;
  };

  //Generate Intern Function
  function generateIntern(intern) {
    return `
    <div class=" cardT col align-self-center">
      <div class="card " style="width: 16rem;">
        <div class="card-header" style="height: 5rem;">
        ${intern.getName()}
        <p>
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mortarboard"
							viewBox="0 0 16 16">
							<path
								d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5ZM8 8.46 1.758 5.965 8 3.052l6.242 2.913L8 8.46Z" />
							<path
								d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46l-3.892-1.556Z" />
						</svg> ${intern.getRole()}
				</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><span class="listItem">ID: </span>${intern.getId()}</li>
          <li class="list-group-item"><span class="listItem">e-mail: </span><a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
          <li class="list-group-item"><span class="listItem">School: </span>${intern.getSchool()}</li>
        </ul>
      </div>
    </div>`;
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
    <div class ="container">
      <div class="row justify-content-center" id="cardsTeam">
      ${generateProfiles(data)}         
      </div>
    </div>
      
  </body>
  
  </html>`
}

module.exports = profileCards
