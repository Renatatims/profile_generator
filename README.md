# Profile Generator
  
  [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

  ## Description
  This application generates profile summaries for each person based on user's input in the terminal.
  
  Full Demo video available at: https://drive.google.com/file/d/1LeUrsdYMqrQm8KUMRW-BMrCszAK05tq6/view

  ![Preview](/dist/assets/screenshots/Capture1.PNG)
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Features](#features)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  - [Credits](#credits)
  
  ## Installation
  1. This application requires the installation of inquirer. Please go to the terminal and type in the following: 

````java 
  npm i inquirer@8.2.4
```` 
  This command will download the "node_modules". 
  
  2. Once downloaded, please type in the below to start the application:

````java 
  node index.js 
````

  ## Usage
  The application will prompt the user information about the team members. Once all the questions are answered, then a html file is generated with the following info: name, employee ID and email address. Depending on the user's employee selection, a specific question will appear as per the following:
  1. Manager - input an Office Number.
  2. Engineer - input a GitHub account.
  3. Intern - input a School.

 ### Terminal - user input example below:

 
  ![Demo](/dist/assets/screenshots/Capture2.PNG)
 

  ## Features
  1. HTML file is generated with profile information of each employee. The user have the option to select which employee to include.

  2. Validation included for name, office number and e-mail. The user is only able to input:
    - Letters and space to name's input. 
    - Numbers and dashes to Office Number. 
    - The e-mail input must contain "@" and "."

````java
    validate: (answer) => {
			const valid = answer.match (/^[A-Za-z0-9+_.-]+@(.+)$/);
			if (valid){
				return true;
			} else{
				return "Please enter a valid email"
			}
		}
````

  ## License
  [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
  
  This application is covered by MIT license, available at:
  https://opensource.org/licenses/MIT

  ## Contributing
  Please feel free to send a pull request, the following is my GitHub account: https://github.com/Renatatims

  ## Tests
  Please make sure the inquirer is installed. Once the node_modules are downloaded, then you can run the application by typing 'node index.js' in the terminal and the user will be prompt with questions related to the employee's profile info. For unit tests please use JEST and, in the terminal, type in the following to run the test:

````java 
  npm test 
````


  ## Questions
  If you have any questions please contact me at:
   - GitHub account: https://github.com/Renatatims
   - e-mail account: @gmail.com

  ## Credits
   - Jest: https://www.npmjs.com/package/jest 
   - Inquirer: https://www.npmjs.com/package/inquirer/v/8.2.4
   - Mozilla: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
 
