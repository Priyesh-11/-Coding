/*             Stack (primitive)=> call by value          */
/*             heap (non - primitive)=> call by referance          */

let myname = "priyesh";
let mynameTwo = myname;

console.log(myname); // priyesh value not changed, call by value
console.log(mynameTwo); // priyesh value not changed, call by value

//call by value => mynameTwo is a copy of myname hence changing mynameTwo will not change myname


let profile = {
    name: 'priyesh',
    age: 24
}
let profileTwo = profile;

profileTwo.name = 'john';

console.log(profile.name); // john value changed, call by referance
console.log(profileTwo.name); // john value changed, call by referance
//call by referance => profileTwo is a referance to profile hence changing profileTwo will change profile as well

