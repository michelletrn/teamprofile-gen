const Employee = require("./Employee");

class Manager extends Employee {
    constructor({name, role, id, email, officeNumber}) {
        super({name, id, email})
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
