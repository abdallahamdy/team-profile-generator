const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

const employeesList = [];

const promptManager = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Enter the team manager name:'
      },
      {
        type: 'input',
        name: 'id',
        message: 'Enter the team managers id:'
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter the team managers email:'
      },      
      {
        type: 'input',
        name: 'officeNumber',
        message: 'Enter the office number:'
      }
    ]);
};

// const menuPrompt = () {

// }

const createManager = function() {
    promptManager()
        .then(managerData => {
            console.log(managerData);
            employeesList.push(new Manager(managerData.name, managerData.id, managerData.email, managerData.officeNumber));
        })
        // .then(menuPrompt());
}

createManager();