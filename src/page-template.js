// create team function with team array passed in
const generateHTML = team => {
    // create the manager html function with manager object passed in as input parameter
    // - return template literal replacing name, role, id, email, office number with getXXX methods from manager object
    const managerHTML = manager => {
        return `
        <div class="col-4 card">
            <h2 class="card-title">${manager.getName()}</h2>
            <h3 class="role card-title">Manager</h3>
            <ul class="credentials">
                <li>ID: ${manager.getID()}</li>
                <li>Office: ${manager.getOfficeNumber()}</li>
                <li>Email: ${manager.getEmail()}</li>
            </ul>
        </div>
        `;
    };

    // create the html function for engineers with engineer object passed in as input parameter
    // - return template literal replacing name, role, id, email, github name with getXXX methods from engineer object
    const engineerHTML = engineer => {
        return `
        <div class="col-4 card">
            <h2 class="card-title">${engineer.getName()}</h2>
            <h3 class="role card-title">Engineer</h3>
            <ul class="credentials">
                <li>ID: ${engineer.getID()}</li>
                <li>Email: ${engineer.getEmail()}</li>
                <li>Github: ${engineer.getGithub()}</li>
            </ul>
        </div>
        `;
    };

    // create the html function for interns with intern object passed in as input parameter
    // - return template literal replacing name, role, id, email, school name with getXXX methods from intern object
    const internHTML = intern => {
        return `
        <div class="col-4 card">
            <h2 class="card-title">${intern.getName()}</h2>
            <h3 class="role card-title">Intern</h3>
            <ul class="credentials">
                <li>ID: ${intern.getID()}</li>
                <li>Email: ${intern.getEmail()}</li>
                <li>School: ${intern.getSchool()}</li>
            </ul>
        </div>
        `;
    };

    // create an empty employee html array to store employee html for manager, engineers, interns
    const html = [];

    // make call to filter method on team array - for each employee in team array to check if the employee's role is "Manager" via the employee's get role method and assign the new manager array returned from filter method to a new variable
    // make call to map method on the new manager array to call create manager html function and assign the new manager html array returned from map method to a new variable
    // make call to join method on the new manager html array to convert it to html string and assign it to a new variable
    // push the new manager html string to the employee html array
    // option - you can use chained array methods to avoid create new variables
    html.push(
        team
            .filter(employee => employee.getRole() === "Manager")
            .map(manager => managerHTML(manager))
    );

    // make call to filter method on team array - for each employee in team array to check if the employee's role is "Engineer" via the employee's get role method and assign the new engineer array returned from filter method to a new variable
    // make call to map method on the new engineer array to call create engineer html function and assign the new engineer html array returned from map method to a new variable
    // make call to join method on the new engineer html array to convert it to html string and assign it to a new variable
    // push the new engineer html string to the employee html array
    // option - you can use chained array methods to avoid create new variables
    html.push(
        team
            .filter(employee => employee.getRole() === "Engineer")
            .map(engineer => engineerHTML(engineer))
    );

    // make call to filter method on team array - for each employee in team array to check if the employee's role is "Intern" via the employee's get role method and assign the new intern array returned from filter method to a new variable
    // make call to map method on the new intern array to call create intern html function and assign the new intern html array returned from map method to a new variable
    // make call to join method on the new intern html array to convert it to html string and assign it to a new variable
    // push the new intern html string to the employee html array
    // option - you can use chained array methods to avoid create new variables
    html.push(
        team
            .filter(employee => employee.getRole() === "Intern")
            .map(intern => internHTML(intern))
    );

    // call join method on employee html array to convert it to html string and return it to the caller
    return html.join("");

}

// export function to generate entire page with team array passed in as input parameter from index.js
// - return template literal for entire html replacing team member html with returned value from create-team-function via template literal varaible expression
module.exports = team => {

    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <meta name="Description" content="Enter your description here" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
        <link rel="stylesheet" href="style.css">
        <title>Team Profile</title>
    </head>
    
    <body>
        <header class="team-title">
            <h1>Team</h1>
        </header>
        <div class="container" id="employees">
            <div class="row">
                ${generateHTML(team)}
            </div>
        </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/js/bootstrap.min.js"></script>
    </body>
    
    </html>
    `;
};

