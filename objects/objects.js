// object literals


// this is an object with key value pairs
let user = {
    name: 'joseph',
    age: 25,
    email: 'crystal@joe.com',
    location: 'berlin',
    blogs: ['why', '10 things']
};

console.log(user) // this shows everything above 
console.log(user.name) // this gets us the specific value using dot notation

user.age = 35; // this turns the age to 35
console.log(user.age); // the console now reads 35 when accessing the age property

console.log(user['name']) // this is using square bracket notaion & gets the name property etc.

const key = 'location';

console.log(user[key]) // this shows us location property by square bracket notation

user['name'] = 'dean'; // this changes the name property to dean

console.log(user.name) // the output of this is the new name of dean

console.log(typeof user); // this shows us that the user is of object type