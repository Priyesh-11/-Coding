let moon="11";
// console.log(typeof (moon)); //string
let moonInNum = Number(moon); //11
// console.log(typeof (moonInNum)); //number

let moon1="11ab";
// console.log(typeof (moon1)); //string
let moonInNum1 = Number(moon1); //11ab => NaN
// console.log(typeof (moonInNum1)); //number
// console.log(moonInNum1); //NaN => Not a Number

let moon2= null; //null
// console.log(typeof (moon2)); //object
let moonInNum2 = Number(moon2); //null => 0
// console.log(typeof (moonInNum2)); //number
// console.log(moonInNum2); //0


let moon3= true; //true
// console.log(typeof (moon3)); //boolean
let moonInNum3 = Number(moon3); //true => 1, false => 0
// console.log(typeof (moonInNum3));  //number
// console.log(moonInNum3); //1



let IsLoggedIn = 1;
let bool = Boolean(IsLoggedIn);
// console.log(bool); //true

// 1 => true ; 0 => false
// "" => false ; " " => true
// "priyesh" => true ; " " => true
// null => false ; undefined => false

let something = 69; //number
let StringSomething = String(something); 
// console.log(typeof StringSomething); //string
// console.log(StringSomething); //69


/************************************Operations*******************************************/

let number1 = 10;
let negNum1 = -number1;
// console.log(negNum1); //-10

// console.log(10 + 10); //20
// console.log(10 - 10); //0
// console.log(10 * 10); //100
// console.log(10 / 10); //1
// console.log(10 % 7); //3
// console.log(10 ** 2); //100


let string1 = "priyesh ";
let string2 = "singh";

let string3 = string1 + string2;
// console.log(string3); //priyesh singh    

// console.log("2" + 2); //22  
// console.log(2 + "2"); //22
// console.log("2" + 2 + 2); //222
// console.log(2 + 2 + "2"); //42

// console.log((9 + 8) - 7 * 6 / 5); //17.6 using BODMAS rule use brackets for better understanding


// console.log ( +true); //1
// console.log( +""); //0
// console.log( +"priyesh"); //NaN

let num1, num2, num3;
num1 = num2 = num3 = 10;
// console.log(num1); //10

let gamex = 10;
gamex = gamex++;
//  console.log(gamex); //10
gamex = ++gamex;
//  console.log(gamex); //11
