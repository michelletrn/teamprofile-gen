// 1.
// import manager, engineer, intern files with require()
// import inquirer with require()
// import path with require()
// import fs with require()
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

// 2.
// import page-template.js from subfoler src with require and assign it to a variable to be called later to render html
const template = require('./src/page-template');

// 3.
// create variable to hold the path to dist subfolder using path lib resolve method
const outputDir = path.resolve(__dirname, "dist");
// create variable to hold the path to team.html using path lib join method
const outputPath = path.join(outputDir, "team-profile.html");

// 4.
// create an empty employee member array variable to store the employee members, manager, engineers, and interns
const employeeMembers = [];
// create an empty employee id array to store the employee ids
// const employeeIds = []; do we even need????

// 5.
// print user of usage
console.log('\nTeam Profile Generator \nTo generate your team, please answer the prompts below:\n')

// 6.
// make call to create manager function to start the main process
const init = async() => {
    await createManager();
}

// 7.
// create manager function
// - ask the questions for name, id, email, office number for manager using inquirer
// - in the .then callback function, create manager object by instantiating Manager class instance, passing in name, id, office number as arguments to constructor
// - push the manager object to the employee member array
// - push the manager id to the employee id array
// - make call to the create team function
const createManager = async () => {
    console.log('=============== Please enter manager info... ===============');
    const managerQ = [
        {
            type: 'input',
            message: 'Enter manager name:',
            name: 'name'

        },
        {
            type: 'input',
            message: 'Enter employee ID:',
            name: 'id'

        },
        {
            type: 'input',
            message: 'Enter email:',
            name: 'email'
        },
        {
            type: 'input',
            message: 'Enter office number:',
            name: 'officeNumber'
        }
    ];

    inquirer.prompt(managerQ)
        .then((data) => {
            const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
            employeeMembers.push(manager);
            addTeamMember();
        });

}


// 8.
// create team function
// - prompt user with the list of choices for Engineer, Intern, or End of adding employee for the team
// - in .then callback function check what the user choice is and make call to the corresponding functions respectively
// - make call to add-engineer-function if the choice is engineer
// - make call to add-intern-function if choice is intern
// - make call to build-team function if choice is end of adding employee
const addTeamMember = async() => {
    inquirer.prompt({
        type: 'list',
        message: 'Please add your team member:',
        name: 'addEmployee',
        choices: ['Engineer', 'Intern', 'None, team completed']
    })
    .then((data => {
        if (data.addEmployee === 'Engineer') {
            createEngineer();
        } 
        if (data.addEmployee === 'Intern') {
            createIntern();
        } 
        else if (data.addEmployee === 'None, team completed') {
            buildTeam();
        }
        
    }))
}

// 8.
// add engineer function
// - prompt user with questions for engineer name, id, email, and github name
// - in .then callback create engineer object by instantiating Engineer class instance passing name, id, email, and github as arguments to class constructor
// - push engineer object to employee member array
// - push engineer id to employee id array
// - make call to create team function
const createEngineer = async () => {
    console.log('\n=============== Please enter engineer info... ===============');
    const engineerQ = [
        {
            type: 'input',
            message: 'Enter Engineer name:',
            name: 'name'

        },
        {
            type: 'input',
            message: 'Enter employee ID:',
            name: 'id'

        },
        {
            type: 'input',
            message: 'Enter email:',
            name: 'email'
        },
        {
            type: 'input',
            message: 'Enter Github username:',
            name: 'github'
        }
        
    ];

    inquirer.prompt(engineerQ)
        .then((data) => {
            const engineer = new Engineer(data.name, data.id, data.email, data.github);
            employeeMembers.push(engineer);
            addTeamMember();
        });

}


// 9.
// add intern function
// - prompt user with questions for intern name, id, email, and school
// - in .then callback create intern object by instantiating Intern class instance passing name, id, email, and school as arguments to class constructor 
// - push intern object to employee member array
// - push intern id to employee id array
// - make call to create team function
const createIntern = async() => {
    console.log('\n=============== Please enter intern info... ===============');
    const internQ = [
        {
            type: 'input',
            message: 'Enter Intern name:',
            name: 'name'

        },
        {
            type: 'input',
            message: 'Enter employee ID:',
            name: 'id'

        },
        {
            type: 'input',
            message: 'Enter email:',
            name: 'email'
        },
        {
            type: 'input',
            message: 'Enter school:',
            name: 'school'
        }
        
    ];

    inquirer.prompt(internQ)
        .then((data) => {
            const intern = new Intern(data.name, data.id, data.email, data.school);
            employeeMembers.push(intern);
            addTeamMember();
        });

}


// 10.
// build team function
// - check existing of dist subfolder
// - if not exist, create the dist subfolder
// - make call to imported render function passing employee member array as argument and assign returned html to a variable
// - make call to fs write file function passing the html file path, html variable
function buildTeam() {
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir);
    }
    console.log('Employee: ' + JSON.stringify(employeeMembers));
    fs.writeFileSync(outputPath, template(employeeMembers), 'utf-8');
    console.log('\nTeam Profile Generated - check dist folder... ');
    console.log('============ Thank you for using Team Profile Generator! ============\n');
}

init();

