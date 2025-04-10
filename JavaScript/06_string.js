const name = "priyesh"
const age = 9
const city = "indore"

// console.log(name + " is " + age + " years old and lives in " + city); // string concatenation, not recommended, it is not readable and hard to understand

// console.log(`hello my is ${name} & i'm ${age} years old and i live in ${city}`); // template literals, recommended, it is readable and easy to understand

const gamename = new String("player69"); //

// console.log(gamename.__proto__); // String.prototype

// console.log(gamename.length); // 7, length of the string
// console.log(gamename.toUpperCase()); // PLYER69, convert to uppercase

// console.log(gamename.charAt(0)); // p, get the first character of the string

// console.log(gamename.indexOf("y")); // 3, get the index of the first occurrence of the character 'y' in the string

// console.log(gamename.substring(0, 3)); // play, get the substring from index 0 to 3 (not inclusive)

// console.log(gamename.slice(0, 3)); // play, get the substring from index 0 to 3 (not inclusive), same as substring
// console.log(gamename.slice(-3)); // 69, get the last 3 characters of the string

let str = "   hello world   ";
// console.log(str.trim()); // hello world, remove whitespace from both sides of the string
// console.log(str.trimStart()); // hello world   , remove whitespace from the start of the string
// console.log(str.trimEnd()); //    hello world, remove whitespace from the end of the string
// console.log(str.replace("hello", "hi")); // hi world, replace the first occurrence of the string 'hello' with 'hi'

const url = "https://Priyesh.com/Priyesh%20Singh"

// console.log(url.replace("%20" ,"-")); // https://Priyesh.com/Priyesh-Singh, replace the first occurrence of the string '%20' with '-'

// console.log(url.includes("Priyesh")); // true, check if the string includes the string 'Priyesh'
// console.log(url.startsWith("https")); // true, check if the string starts with the string 'https'
// console.log(url.endsWith("Singh")); // true, check if the string ends with the string 'Singh'
// console.log(url.includes("player")); // false, check if the string includes the string 'player'

const pri = "Priyesh-is-a-good-boy-at-daytime"
const priArr = pri.split("-"); // split the string into an array of strings using '-' as the separator

// console.log(priArr); //converted to array

// console.log(priArr.join(" ")); // join the array of strings into a single string using ' ' as the separator
// console.log(priArr.join("-")); // join the array of strings into a single string using '-' as the separator