"use strict"; // This is a directive that switches the engine to the "modern" mode, changing the behavior of some built-in features.

//alert("Hello World"); we can't use alert in nodejs because it is a browser feature
console.log("Priyesh");
console.log("6" + 6);

let name = "Priyesh";
let age = 9;
let islogin = true;

//numbet => int, float, double 2^53
//bigint => 2^53+
//string => "hello" (recommended), 'hello', `hello`
//boolean => true, false

//null => null (stands for nothing) empty
//undefined => undefined
//symbol => Symbol("description") (unique and immutable value)
//object => {key: value} (key-value pair)

// console.log(typeof null); //object
// console.log(typeof undefined); //undefined
// console.log(typeof Symbol("description")); //symbol

