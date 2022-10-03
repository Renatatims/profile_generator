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
]

