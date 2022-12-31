const Employee = require("./Employee");
//manager is a subclass of employee
class Manager extends Employee {
    //constructor creates an object for the manager class
    constructor(name, id, email, officeNumber) {
        //super allows the manager subclass to inherit properties and methods from employee class
        super(name, id, email)
        this.role = 'Manager';
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Manager;
