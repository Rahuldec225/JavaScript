//   IF (condition =>   <, >, <=, >=, !=, ==, ===, !==)


// if( 2 == "2"){
//     console.log("executed")
// }

// if( 2 === "2"){
//     console.log("executed")
// }

// *********************************** if-else*****************

// const temperature = 58

// if(temperature <=50){
//     console.log("Temperature is less then 50")
// } else{
//     console.log("Temperature is greater then 50")

// }




// const score = 200 
// if (score> 100) {
//     const power = "fly"
//     console.log(`user Power: ${power}`)
// }
// console.log(`user Power: ${power}`)


// const balance = 1000

// if (balance> 588) console.log("test");





// *********  * *****      nesting 

// const balance = 1000

// if (balance < 500)
// {
//     console.log("less then 500")    
// } else if (balance < 750) {    
//     console.log("less then 500")
// }else if ( balance < 980){
//     console.log("less then 980")
// }else{
//     console.log("less then 1200")
// }




const userLoggedIn = true
const debitCard = true
const LoggedInFromGoogle = false
const LoggedInFromemail = false

if(userLoggedIn && debitCard){
    console.log("allow to by course")
}
if(LoggedInFromGoogle || LoggedInFromemail){
    console.log("allow to by course")
}