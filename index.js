const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
	{
		type: 'list',
		message: "Please select the employee you would like to add to your team",
		choices: ["Manager", "Engineer", "Intern"],
		name: 'questionAdd'

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

