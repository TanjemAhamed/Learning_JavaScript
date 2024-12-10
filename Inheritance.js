/**
 * CLASSIC WAY TO USE INHERITANCE
 * 
 */


class Employees {
    constructor(name, department) {
        this._name = name;
        this._department = department;
    }
}


class ParmanentEmployee extends Employees {
    constructor(name, department, salary) {
        super(name, department);
        this._salary = salary;
    }
    get salary() {
        return this._salary;
    }
}

class TemporaryEmployee extends Employees {
    constructor(name, department, wages) {
        super(name, department);
        this._wages = wages;
    }
    get wages() {
        return this._wages;
    }
}

let parmEmp1 = new ParmanentEmployee('Aryan Sama', 'Software', 100);
console.log(parmEmp1);


/**
 * USING PROTOTYPE TO INHERIT
 */

// Run these in browser console
var employee = {
    name: 'John',
    department: 'IT',
    getInfo: function() {
        return `${this.name} and ${this.department}`;
    }
};

employee.getInfo();
let pEmployee = Object.create(employee);
pEmployee.getInfo();
console.dir(pEmployee);
let tEmployee = Object.create(pEmployee);
console.dir(pEmployee);

// DON'T DO THIS but for checking purpose
String.prototype.MyPropertyBJIT = 'BJIT';
console.dir(String.prototype); 