// arguments & parameters

// const speak = function(time, name) {
//     console.log(`good ${time} ${name}`)
// }

const speak = function(time = 'night', name = 'mario') {
    console.log(`good ${time} ${name}`)
}

speak('morning', 'mario') // when the function is called it asigns it to the name variable
speak('morning', 'joe')// these values will overrite the values above