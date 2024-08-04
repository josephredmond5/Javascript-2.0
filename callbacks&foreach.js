// callbacks & foreach

// const myFunc = (callBackFunc) => {
//     // do something
//     let value = 50;
//     callBackFunc(value);
// };

// myFunc(function(value){
//     // do something 
//     console.log(value)
// });

// myFunc(value => { // this is the arrow function version of the above 
//     // do something
//     console.log(value)
// })


// let people = ['mario', 'john', 'steve', 'ryan', 'steve']

//methods are just functions

// people.forEach(function(person){
//     console.log(person)
// });

// people.forEach((person, index) => { // this is the arrow function version of the above, paranthesis there because it is a method
//     console.log(person, index) // this spits out the person and the index to the console
// });

// const logPerson = (person,index) =>{
//     console.log((`${index}, - hello ${person}`)); // check out the console for this, revisit tomorrow
// };

// people.forEach(logPerson);

//REVISIT

//callbacks & foreach

// const myFunc = (callBackFunc) => {
//     // do something
//     let value = 50;
//     callBackFunc(value);
// };

// we pass a function into another function as an argument

// myFunc(function(value){ // this is calling the method then passing in a function as an argument
// // do something
// console.log(value);
// });

// myFunc(value => { // this is the arrow function version of the above
//     // do something
//     console.log(value);
//     });

let people = ['john', 'steve', 'joe', 'alan', 'dave'];

// people.forEach(function(person){  // forEach is a method that itterates on an array
//     console.log('something') // this function fires 5 times, result is '5 something'
//     console.log(person) // this spits out the names of the people

// });

const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`)
}

// people.forEach((person, index) => {  // this is the arrow function version of the above
//     console.log(index, person);

// });

people.forEach(logPerson);

// call back functions are just normal functions that we pass into another function or emthod as an argument