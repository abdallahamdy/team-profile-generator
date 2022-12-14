const inquirer = require('inquirer');
const Manager = require('./Manager');
const Intern = require('./Intern');
const Engineer = require('./Engineer');
const generatePage = require('../src/template.js');
const fs = require('fs');

function Queries() {
    this.currentManager;
    this.currentEmployees = [];
}

Queries.prototype.initializeQueries = function() {
    inquirer.prompt([
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
    ])
    .then(managerData => {
        var manager = new Manager(managerData.name, managerData.id, managerData.email, managerData.officeNumber);
        this.currentManager = manager;
        this.currentEmployees.push(manager);
        this.nextEmployeeQuery();
    })
}

Queries.prototype.nextEmployeeQuery = function () {
    inquirer.prompt(
        {
            type:'list',
            name: 'action',
            message: 'Choose an action:',
            choices: ['Add an engineer.', 'Add an intern.', 'Complete building team.']
        })
        .then(results => {
            var theAction = results.action;
            if(theAction.includes('intern')){
                this.internPrompt();
            } else if (theAction.includes('engineer')){
                this.engineerPrompt();
            } else if (theAction.includes('team')){
                this.completePrompt();
            }
        })
}

Queries.prototype.internPrompt = function() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the interns name:'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter the interns id:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the interns email:'
        },
        {
            type: 'input',
            name: 'school',
            message: 'Enter the interns school:'
        }
    ])
    .then(internInfo => {
        var intern = new Intern(internInfo.name, internInfo.id, internInfo.email, internInfo.school);
        this.currentEmployees.push(intern);
        this.nextEmployeeQuery();
    })
}

Queries.prototype.engineerPrompt = function() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the engineers name:'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter the engineers id:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the engineers email:'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter the interns github:'
        }
    ])
    .then(engineerInfo => {
        var engineer = new Engineer(engineerInfo.name, engineerInfo.id, engineerInfo.email, engineerInfo.github);
        this.currentEmployees.push(engineer);
        this.nextEmployeeQuery();
    })
}

Queries.prototype.completePrompt = function() {
    let thePage = generatePage(this.currentEmployees);

    fs.writeFile("./dist/test.html", thePage, err => {
        if(err){
            console.log(err);
        }else{
            console.log("File written successfully");
        }
    })

    fs.copyFile('./src/style.css', './dist/style.css', err => {
        if (err) {
            console.log(err)
        } else {
            console.log("Files copies successfully")
        }
    });
}

module.exports = Queries;