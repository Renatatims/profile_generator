function profileCards (data) {
    return `
    <!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
      <link rel="stylesheet" href="./assets/style.css">
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
  
    <div class=" cardT col-sm-4">
        <div class="card " style="width: 16rem;">
            <div class="card-header" style="height: 5rem;">
            ${data.questionAdd}
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"> ${data.name}</li>
                <li class="list-group-item">${data.id}</li>
                <li class="list-group-item">${data.email}</li>
            </ul>
        </div>
    </div>
      
      </body>
  
      </html>
      `
}

module.exports = profileCards
