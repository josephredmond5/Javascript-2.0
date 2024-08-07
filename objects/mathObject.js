// math object - built in object that we can use 

console.log(Math)
console.log(Math.PI) // 3.142
console.log(Math.E) // euler's number is a numerical constant used in mathematical calculations and is an irrational number

// EULERS NUMBER
// Euler's number, denoted as e, is a special number used often in math. It cannot be written exactly 
// as a simple fraction or a repeating decimal, meaning it's an irrational number.

const area = 7.7;

// integer = is a whole number without fractions.
console.log(Math.round(area)); // rounds the number to the nearest integer - 8 
console.log(Math.floor(area)); // takes the number and floors it to the number below - 7
console.log(Math.ceil(area)); // takes the number and rounds it up - 8
console.log(Math.trunc(area)); // takes away the decimal and leaves the integer

// use case of the math object

const random = Math.random();

console.log(random) // creates a random number from 0-1
console.log(Math.round(random)) // this is either 1 - 0 all the time 
console.log(Math.round(random * 100)) // this will be a number between 0 - 100