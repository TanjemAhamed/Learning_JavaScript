let employees = {
    name: 'Aryan Sama',
    salary: 100,
    department: 'Software',
    describe: function() {
        return `${this.name} works in ${this.department} and earns about $${this.salary} per month.`;
    }
};
employees.bonus = 20;
console.log(employees.describe() + `He has a bonus of $${employees.bonus}`);



// Prototype
let employee1 = Object.create(employees);
let employee2 = {};
let employee4 = new Object();
// Constructor function for object creation

// Construction function
function Employee(name, department, salary) {
    this.name = name;
    this.department = department;
    this.salary = salary;
    this.describe = function() {
        return `${this.name} works in ${this.department} and earns about $${this.salary} per month.`;
    }
}

let employee3 = new Employee('Aryan Sama', 'Software', 100);
console.log(employee3.describe());









// Adding proparty to the object
let car = {};

car.run = function() {
    return 'Car is running';
}

// Run acts like run
console.log(car.run());



let cars = {
    name: 'Audi'
};

// Accessing property
console.log(cars.name);
console.log(cars['name']); // Accessing using key value
console.log(cars['name'] = 'BMW'); // Changing the value of the property



/**
 * BEST Practice: When using OOP concept or specific direction then we have to use classical way of creating object
 * ELSE use Literal Way to create object
 */