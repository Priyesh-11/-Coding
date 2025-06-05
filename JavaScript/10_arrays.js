const heros = ['spiderman', 'batman', 'superman']
const man = ['peter', 'clark', 'bruce']

// heros.push(man); // this will add an array to the heros array

// console.log(heros) ;
// console.log(heros[3][1]) ; 

const newheros = heros.concat(man); // this will not change the heros array, it will return a new array
// console.log(newheros);

const llhero = [... heros, ...man]; // this will also return a new array
// console.log(llhero);
// console.log(llhero[3]); // this will return the 4th element of the array
// console.log(llhero[3][1]); // this will return the 2nd character of the 4th element of the array

const num = [1, 2, 3, [ 4, 5, [ 6, 7] ] ];

const num1 = num.flat(Infinity); // this will flatten the array to a single level
// console.log(num1); // [ 1, 2, 3, 4, 5, 6, 7 ]

console.log(Array.isArray('spiderman')); // this will return false, as 'spiderman' is not an array

console.log(Array.from("priyesh")); // this will return an array of characters ['p', 'r', 'i', 'y', 'e', 's', 'h']


const marks1 = 99
const marks2 = 94
const marks3 = 89

console.log(Array.of(marks1, marks2, marks3)); // this will return an array of the marks [99, 94, 89]
const arr = Array(10).fill(0); // this will create an array of 10 elements, all initialized to 0
