// Get a reference to the 'ul'
// const ul = document.querySelector('.people');

// const people = ['harry', 'Steve', 'dave', 'John'];

// let html = ``;

// people.forEach(function(person){
//     // Create html template
//     html += `<li style="color: purple">${person}</li>`;
// });

// console.log(html);
// ul.innerHTML = html;

// REVISIT

// get a reference to the ul

const ul = document.querySelector('.people');

const people = ['john', 'steve', 'joe', 'john', 'paul'];

let html = ``;

people.forEach(function(person){
    // create html template
    html += `<li style=color: purple> ${person}</li>` // adding this snippet onto the html
    // this will result in a big list of LI tags
});

console.log(html);

ul.innerHTML = html;

// This code generates a list of <li> elements
//  from an array of names and inserts them into a <ul> element with the class people.

people.forEach(person => { // this is the arrow function version of the code above
    // create html template
    html += `<li style=color: purple> ${person}</li>` // adding this snippet onto the html
    // this will result in a big list of LI tags
});