/*
Manager extends Employee, will also have:
officeNumber
getRole() // Overridden to return 'Manager'
*/
const Employee = require('./Employee');

class Manager extends Employee{
    constructor(name, id, email, officeNum) {
        super(name, id, email);

        this.officeNum = officeNum;        
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;