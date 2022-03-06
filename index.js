const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');
const generatePage = require('./lib/generatePage');

var teamA = [];

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter team manager's name: "
            //validate: nameInput => {}
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter employee ID :"
            //validate:
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter e-mail address: "
            //validate:
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter office number: "
            //validate:
        }
    ])
    .then(managerData => {
        const { name, id, email, officeNumber} = managerData;
        let manager = new Manager(name, id, email, officeNumber);
        teamA.push(manager);
    })
}

const addEmployee = () => {

    return inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "Select employee role: ",
            choices: ["Engineer", "Intern"]
        },
        {
            type: "input",
            name: "name",
            message: "Enter employee name: ",
        },
        {
            type: "input",
            name: "id",
            message: "Enter employee ID number: ",
        },
        {
            type: "input",
            name: "email",
            message: "Enter employee email address: ",
        },
        {
            type: "input",
            name: "github",
            message: "Enter the engineer GitHub username.",
            when: ({ role }) => {
                if(role === "Engineer") {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "school",
            message: "Enter the intern's school.",
            when: ({ role }) => {
                if(role === "Intern") {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: "confirm",
            name: "confirmInput",
            message: "Would you like to add another employee?",
            default: false
        }  
    ])
    .then(employeeData => {
        let { role, name, id, email, github, school, confirmInput} = employeeData;
        
        if(role === "Engineer") {
            employee = new Engineer(name, id, email, github);
            teamA.push(employee);
        } else if(role ==="Intern") {
            employee = new Intern(name, id, email, school);
            teamA.push(employee);
        }
        if(confirmInput) {
            return addEmployee(teamA)
        } else {
            console.log(teamA)
            return teamA;
        }
    })
}

function writeHTMLFile (teamA) {
    var HTML = generatePage(teamA);

    fs.writeFile('./dist/index.html', HTML, err => {
        if(err) throw err;
        else console.log("HTML file has been generated!");
    })
}

promptUser()
.then(addEmployee)
.then(teamA => {
    return writeHTMLFile(teamA)
});
