// string
    console.log('hello world');

    let email = 'josephredmond@gmail.com';
    console.log(email);

// string concatenation 
let firstName = 'Brandon';
let secondName = 'Sanderson';
let fullName = firstName + ' ' + secondName;

console.log(fullName)
// getting characters 
console.log(fullName[0]); // this will get us the letter B
console.log(fullName[2]); // this will get us the letter A

// string length
console.log(fullName.length); // this gets us the length of the string

// string methods
    console.log(fullName.toUpperCase());
    let result = fullName.toLowerCase();
    console.log(result + ' / ' + fullName); // WORK

    let index = email.indexOf('@'); // finds what position the @ symbol is at
    console.log(index);
