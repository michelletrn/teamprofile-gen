// function to generate manager, engineer and intern from prompt and returns html page
const generateHTML = team => {
    // create the manager html function with manager object passed in as input parameter
    const managerHTML = manager => {
        // return template literal replacing name, role, id, email, office number with methods from manager object
        return `
                <div class="col-4 card">
                    <h2 class="card-title">${manager.getName()}</h2>
                    <h3 class="role card-title">Manager</h3>
                    <ul class="credentials">
                        <li>ID: ${manager.getID()}</li>
                        <li>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                        <li>Office: ${manager.getOfficeNumber()}</li>
                    </ul>
                </div>
        `;
    };

    // create the html function for engineers with engineer object passed in as input parameter
    const engineerHTML = engineer => {
        // return template literal replacing name, role, id, email, github name with methods from engineer object
        return `
                <div class="col-4 card">
                    <h2 class="card-title">${engineer.getName()}</h2>
                    <h3 class="role card-title">Engineer</h3>
                    <ul class="credentials">
                        <li>ID: ${engineer.getID()}</li>
                        <li>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                        <li>Github: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
                    </ul>
                </div>
        `;
    };

    // create the html function for interns with intern object passed in as input parameter
    const internHTML = intern => {
        // return template literal replacing name, role, id, email, school name with methods from intern object
        return `
                <div class="col-4 card">
                    <h2 class="card-title">${intern.getName()}</h2>
                    <h3 class="role card-title">Intern</h3>
                    <ul class="credentials">
                        <li>ID: ${intern.getID()}</li>
                        <li>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                        <li>School: ${intern.getSchool()}</li>
                    </ul>
                </div>
        `;
    };

    // empty employee html array stores employee html for manager, engineers, interns
    const html = [];

    html.push( //pushes the generated html piece into the empty html array
        team
            //filters the team array for the role manager
            .filter(employee => employee.getRole() === "Manager")
            //maps the manager object and calls the function to generate html content for the manager
            .map(manager => managerHTML(manager))
    );

    html.push(
        team
            .filter(employee => employee.getRole() === "Engineer")
            .map(engineer => engineerHTML(engineer))
    );


    html.push(
        team
            .filter(employee => employee.getRole() === "Intern")
            .map(intern => internHTML(intern))
    );

    // call join method on employee html array to convert it to html string and return it to the caller
    //console.log(team); //logs employeeMembers from index
    return html.join("");

}

// export function return html page with team array passed in as input parameter from index.js
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
        <link rel="stylesheet" href="../style.css">
        <title>Team Profile</title>
    </head>
    
    <body>
        <header class="team-title">
            <h1>My Team</h1>
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

