// returning values

// const speak = function(name = 'luigi', time = 'morning') {
//     console.log(`good ${time} ${name}`)
// }

// speak()

// const calcArea = function(radius) {
//     let area = 3.14 * radius ** 2;
//     return area;
// };


const calcArea = function(radius) {
    return 3.14 * radius ** 2;
};

const area = calcArea(5);
console.log(area)