//  Dates


let myDate = new Date()

// console.log(myDate)

// console.log(myDate.toDateString());
//  console.log(myDate.toString());

// console.log(myDate.toISOString());

// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
// console.log(myDate.getTimezoneOffset());


let myCreatedDate = new Date(2023, 3, 23, 3, 55, 56)
 
console.log(myCreatedDate.toLocaleString())


let myTimeStamp = Date.now();


// console.log(myTimeStamp);

// console.log(Math.floor(myTimeStamp/1000))

let newDate = new Date()

console.log()
console.log(newDate.getMonth() +1 );   // +1 is added to month because index of month start from 0
console.log(newDate.getFullYear());


newDate.toLocaleString('default', {
    weekday:"short",
    hour:"2-digit"
})