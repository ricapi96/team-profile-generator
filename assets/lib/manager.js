const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, number) {
        super(name, id, email);
        this.number = number;
    }
    getNumber() {
        return this.number;
    }
    getRole() {
        return "Manager";
    }
}


module.exports = Manager;