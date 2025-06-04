// array 

const myarray = [1, 2, 3, 4, 5];
// console.log(myarray[0]); // 1

const myarray2 = new Array('a', 'b', 'c', 'd', 'e');
const myarray3 = new Array('a', 'b', 'c', 'd', 'e');
// console.log(myarray2[0]); // 'a'


// console.log(myarray.length); // 5

// myarray.push(6); // 6
// myarray.pop(); // 5

// myarray.unshift(0); // 0
// myarray.shift(); // 1
// myarray.includes(8); // false 
// console.log(myarray.indexOf(4)); //3


// console.log(myarray2);  

const splice = myarray2.splice(1, 3);  // ['b', 'c', 'd'] - removes elements from index 1 to 3
console.log(splice); // ['b', 'c', 'd'] - returns the removed elements
console.log(myarray2); // ['a', 'e'] - myarray2 is now modified



const slice = myarray3.slice(1, 3); // ['b', 'c'] - returns a shallow copy of the selected elements
console.log(slice); // ['b', 'c'] - returns the selected elements
console.log(myarray3); // ['a', 'b', 'c', 'd', 'e'] - myarray3 is unchanged

