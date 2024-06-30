// FIZZBUZZ Challenge

// for(let i = 1; i <= 100; i++){
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log('fizzBuzz');
//     } else if (i % 3 === 0) {
//         console.log('Fizz')
//     } else if (i % 5 === 0){
//         console.log('Buzz');
//     } else {
//         console.log(i)
//     }
// }

// PRIME NUMBERS
// for (let i = 2; i <= 100; i++){
//     let isPrime = true;
//     for (let j = 2; j <= Math.sqrt(i); j++){
//         if(i % j === 0){
//             isPrime = false;
//             break;
//         }
//     }
//     if(isPrime){
//         console.log(i);
//     }
// }

// PALINDROME CHECKER
// function isPalindrome(word) {
//     let reversed = word.split('').reverse().join('');
//     return word === reversed;
// }
// console.log(isPalindrome('racecar')); // TRUE
// console.log(isPalindrome('hello')); // FALSE

// FACTORIAL
// function factorial(n) {
//     if(n === 0) {
//         return 1;
//     }
//     return n * factorial(n - 1)
// }
// console.log(factorial(5)); // 120

// FIBONACCI SEQUENCE
// let a = 0, b = 1, next;
// for(let i = 1; i <= 10; i++) {
//     console.log(a);
//     next = a + b;
//     a = b;
//     b = next;
// }

// REVERSE A STRING
// function reverseString(str){
//     return str.split('').reverse().join('');
// }
// console.log(reverseString('hello'));

// // SUM OF AN ARRAY
// let arr = [1, 2, 3, 4, 5];
// let sum = arr.reduce((total, current) => total + current, 0);

// console.log(sum);

// FIND THE LARGEST NUMBER IN AN ARRAY
// let arr = [10, 20, 5, 40, 50];
// let max = Math.max(...arr);

// console.log(max) // 50

// COUNT VOWELS IN A STRING
// function countVowels(str){
//      let count = 0;
//      let vowels = 'aeiouAEIOU';
//      for (let char of str){
//         if(vowels.includes(char)){
//             count++
//         }
//      }
//      return count;
// }

// console.log(countVowels("hello world")); // 3

