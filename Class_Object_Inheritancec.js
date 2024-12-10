class Employee {
    constructor (name, salary, department) {
        this._name = name;
        this._salary = salary;
        this.department = department;
    }

    get name() {
        return this._name;
    }

    get salary() {
        return this._salary;
    }

    get department() {
        return this._department;
    }

    set name(rename) {
        this._name = rename;
    }

    set salary(newSalary) {
        this._salary = newSalary;
    }

    set department(newDepartment) {
        this._department = newDepartment;
    }

    describe() {
        return `${this._name} works in ${this._department} and earns about $${this._salary} per month.`;
    }

}

// Object creation

let employee = new Employee('Aryan Sama', 100, 'Software');

console.log(employee.describe());