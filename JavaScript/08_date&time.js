// dates
let mydate = new Date();
// console.log(mydate.toString());
// console.log(mydate.toTimeString());
// console.log(mydate.toLocaleDateString());

// let Adate = new Date(2024,0,11)
let Bdate = new Date("2024-1-11")
let Adate = new Date("11-01-2024-07:11:09-00:00");

// console.log(Adate.toLocaleString());

let timestamp = Date.now();
// console.log(Bdate.getTime());

// console.log(Adate.getMinutes()); //
// console.log(Adate.getDay()); // 
// console.log(Adate.getMonth() + 1); // January is 0
// console.log(Adate.getFullYear()); // 2024


Adate.toLocaleString('default', {

    weekday: "long"
})
console.log(Adate.toLocaleString('default', {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
})); // Friday, January 11, 2024, 07:11:09 AM
