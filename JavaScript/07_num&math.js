const num1 = 69; // number
const num2 = new Number(11); // object

// console.log(num1); // 69, number
// console.log(num2); // [Number: 11], object

// console.log(num1.toString()); // '69', string
// console.log(num2.toPrecision(5)); // '11', string
// console.log(num2.toFixed(2)); // '11.00', string
// console.log(num1.toExponential(2)); // '6.90e+1', string


// +++++++++++++++++++++++++++++++Number+++++++++++++++++++++


console.log(Math); // [Math: Math], object

console.log(Math.abs(-10)); // 10, number
console.log(Math.ceil(10.1)); // 11, number
console.log(Math.floor(10.9)); // 10, number
console.log(Math.round(10.5)); // 11, number

console.log(Math.max(10, 20, 30)); // 30, number
console.log(Math.min(10, 20, 30)); // 10, number