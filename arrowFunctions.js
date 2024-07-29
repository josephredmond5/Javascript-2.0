// regular functions

// const calcArea = function(radius){
//     return 3.14 * radius ** 2;
// };


// arrow function
// const calcArea = (radius) => { // when there is 1 parameter we can take the parenthesis away - see below
//     return 3.14 * radius ** 2;
// }

const calcArea = radius => 3.14 * radius ** 2; // this is when there is only 1 parameter and returns the value


const area = calcArea(5);
console.log('area is:', area)

// example of an arrow function
const calcBean = () => {

}

// exercise
// No. 1 - turning normal functions into arrow functions
// const greet = function(){ // normal function
//     return 'hello world'
// }

// const greet = () => { // arrow function
//     return 'hello world';
// }

// const hello = greet()

// console.log(hello)


// No.2 - turning normal functions into arrow functions
// const bill = function(products, tax){
//     let total = 0;
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// }
// console.log(bill([10,15,30], 0.2))

const bill = (products, tax) => {
    total = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
};

console.log(bill([10,15,30], 0.2))