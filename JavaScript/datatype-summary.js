/* primitive data types */

// 7 types : string, number, boolean, null, undefined, symbol, bigint

const score = 100; //mumber
const schore = 100.5; // decimal number
const isloggedIn = true;
const insideTemp = null; 
let user; // undefined

const sym = Symbol('123');
const anotherSym = Symbol('123');

// console.log(sym === anotherSym); // false

const bigInt = 1234567890123456789012345678901234567890n;
// console.log(bigInt); // 1234567890123456789012345678901234567890n   

/* reference data types */

// 3 types : object, array, function

const array = ['apple', 'banana', 'orange'];
// console.log(array); // [ 'apple', 'banana', 'orange' ]

const object = {
    name: 'john',
    age: 30,
    city: 'new york'
}
// console.log(object); // { name: 'john', age: 30, city: 'new york' }

const myfun = function(){
    console.log('hello world');

}
