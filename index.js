const inquirer = require('inquirer');
const fs = require('fs');

const manager = require('./lib/Manager');

const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/generateHTML');

const managers = [];

const engineers = [];

const interns = [];






function createEngineer() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the Engineers name?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the Engineers id?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the Engineers email?'
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is the Engineers github username?'
            },
        ]).then(function (answers) {
            console.log(answers);
            const { name,id, email,  github } = answers;
            engineers.push(new Engineer(name,id, email,  github));
            console.log(engineers);
            createTeam();
        });



}


function createIntern() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the interns name?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the interns id?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the interns email?'
            },
            {
                type: 'input',
                name: 'school',
                message: 'What is the interns school?'
            },
        ]).then(function (answers) {
            console.log(answers);
            const { name,id,email,school} = answers;
            interns.push(new Intern(name,id,email,school));
            console.log(interns);
            createTeam();
        });
}





function createManager() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the managers name?"
            },
            {
                type: "input",
                name: "id",
                message: "What is the managers id?"
            },
            {
                type: "input",
                name: "email",
                message: "What is the managers email?"
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What is the managers Office Number?"
            },
        ]).then(function (answers) {

            const { id, email, name, officeNumber } = answers;
            managers.push(new manager(id, email, name, officeNumber));

            console.log(managers);

            createTeam();
        })

}



function createTeam() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "option",
                message: "Which type of of an employee do you want to add?",
                choices: ['Intern', 'Engineer', 'None']

            }

        ]).then(function (answers) {
            console.log(answers);

            switch (answers.option) {
                case 'Intern': createIntern();
                    break;

                case 'Engineer': createEngineer();
                    break;

                default:
                    fs.writeFileSync('./dist/team.html', generateHTML({ managers,engineers,interns}));
                   
                    break;
            }
        })
}

createManager();
