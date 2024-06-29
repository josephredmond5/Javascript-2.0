// // LEXICAL SCOPE
// // code in one scope an access variables in the same scope or any scope outside of it 

// // global variables 
// let x = 2;


// // function with an inner function 
// function outerFunction(){
//     let y = 5;
//     // has acces to x, y 

//     function innerFunction(){
//         let z = 77;
//         // has acces to x, y, z
//     }
// }

// ANOTHER EXAMPLE
// global scope
// const colour = 'Blue';

// function printOut(){
//     // function scope
//     console.log(colour);
// }

// printOut(colour);
// // Blue

// ANOTHER EXAMPLE
//global scope 
const colour = 'Blue';

function printColour() {
    // function scope
    const newColour = 'Red';
}

printColour();
// RefrenceError: newColour is not defined