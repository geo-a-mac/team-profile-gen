const inquirer = require('inquirer');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "Enter team manager's name: "
            //validate: nameInput => {}
        },
        {
            type: 'input',
            name: 'employeeID',
            message: "Enter employee ID :"
            //validate:
        },
        {
            type: 'input',
            name: 'eMail',
            message: "Enter e-mail address: "
            //validate:
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter office number: "
            //validate:
        },
        {
            type: 'confirm',
            name: 'otherEmployee',
            message: "Enter details for another employee? (Y/N)",
            default: true
        },
        {
            type: 'list',
            name: 'menu',
            message: "Select type of employee",
            choices: ['Engineer', 'Intern'],
            default: 0
        }
    ]);

}

const nextUser = (inquirer) => {
    console.log(inquirer.managerName.answer);
} 
promptUser();
//nextUser(inquirer);