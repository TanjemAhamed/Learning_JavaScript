const person = {name: 'John', age: 25};

for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

const fruits = ['apple', 'banana', 'orange'];
for(let fruit of fruits){
  console.log(fruit);
}

function getMassage() {
    return;
}

console.log(getMassage());

let x = Infinity;
if(x) {
    console.log('Truethy');
} else {
    console.log('Falsy');
}

let numbers = ['Hello', 1, 2, 3, 4, 5];

numbers.push(6);
console.log(numbers);

numbers.unshift(0);
console.log(numbers);

numbers.pop();
console.log(numbers);

numbers.shift();
console.log(numbers);


var modifiedNumber = numbers.map(x => {
  return x += 1
});

console.log(modifiedNumber);

var filteredNumber = numbers.filter(x => {
  return x > 2
});

console.log(filteredNumber);

var modifiedNumber = numbers.slice(1, 3);
console.log(modifiedNumber);


numbers.forEach(x => {
  console.log(x);
});


let numbers2 = [2, 6, 7, 8, 9];
let numbers3 = [...numbers, ...numbers2]; // Spread operator to merge two arrays
console.log(numbers3);

