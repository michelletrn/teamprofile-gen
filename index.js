//imports classes, inquire, path, and fs
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

//imports html generator
const template = require('./src/page-template');


// variable to hold the path to dist subfolder using path lib resolve method
const outputDir = path.resolve(__dirname, "dist/generated-html");
// variable to hold the path to team.html using path lib join method
const outputPath = path.join(outputDir, "team-profile.html");

//create an empty employee member array to store the employee members
const employeeMembers = [];


console.log('\nTeam Profile Generator \nTo generate your team, please answer the prompts below:\n**Team Profile page will be found under generated-html in dist folder**')

// init function to start the main process
const init = async() => {
    await createManager();
}

// manager function prompts user for manager inputs, then creates an object by instantiating the subclass and pushes the object into the employees array
const createManager = async () => {
    console.log('=============== Please enter manager info... ===============');
    const managerQ = [
        {
            type: 'input',
            message: 'Enter Manager name:',
            name: 'name',
        },
        {
            type: 'input',
            message: 'Enter employee ID:',
            name: 'id'
        },
        {
            type: 'input',
            message: 'Enter email address:',
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

};

// add member function prompts user to add another member and calls the appropriate function to create their employee type of choice; calls buildteam function if user is finished adding members
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
        };
    }));
};


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
            message: 'Enter email address:',
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
};

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
            message: 'Enter email address:',
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

// build team function checks existing of dist subfolder and creates the folder if it does not exist. then it calls the function to create the html page using the employee array as input
function buildTeam() {
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir);
    }
    console.log('Employee: ' + JSON.stringify(employeeMembers));
    fs.writeFileSync(outputPath, template(employeeMembers), 'utf-8');
    console.log('\nTeam Profile Generated!');
    console.log('============ Thank you for using Team Profile Generator! ============\n');
};

init();

