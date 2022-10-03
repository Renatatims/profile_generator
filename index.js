const inquirer = require("inquirer");
const fs = require("fs");
const profileCards = require ("./src/generateProfile")

const Manager = require ("./lib/Manager");
const Engineer = require ("./lib/Engineer");
const Intern = require ("./lib/Intern");

const questions = [
	{
		type: 'list',
		message: "Please select the employee you would like to add to your team",
		choices: ["Manager", "Engineer", "Intern"],
		name: 'role'

	},
	{
		type: 'input',
		message: "What is the employee's name?",
		name: 'name'
	},
	{
		type: 'input',
		message: "What is the employee's ID?",
		name: 'id'
	},
	{
		type: 'input',
		message: "What is the employee's e-mail adress?",
		name: 'email'
	},
	{
		type: 'input',
		message: "What is the manager's office number?",
		name: 'officeNumber',
		when: function (answer){
			return answer.role === "Manager";
		}
	},
	{
		type: 'input',
		message: "What is the engineer's gitHub?",
		name: 'gitHub',
		when: function (answer){
			return answer.role === "Engineer";
		}
	},
	{
		type: 'input',
		message: "What is the intern's school?",
		name: 'school',
		when: function (answer){
			return answer.role === "Intern";
		}
	},
	{
		type: 'input',
		message: "Please enter a name for this file",
		name: 'file'
	},
]

// User Input Function - return answers

function userInput() {
	return inquirer.prompt(questions);

};

// Function to write README file
function writeToFile(file, data) {
	fs.writeFile(`${file}.html`, data, (err) => {
		err ? console.log(err) : console.log(`Your ${file}.html was generated!`);
	})
};

// Function to initialize the application
async function init() {
	let userAnswers = await userInput();
	writeToFile((userAnswers.file), (profileCards(userAnswers)));
}

// Call init to initialize application
init();
