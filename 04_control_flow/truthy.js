
// const userEmail = "rahulkdecdjs@gmil.com"
// const userEmail = ""

const userEmail = []

if(userEmail){
    console.log("got User email ")

} else{
    console.log("Dont have email")
}


// Falsy Value
///=>>>>
//        false , 0, -0, BigInt 0n, "", null, undefined, NaN


// truthy Value
//  =>>>>
            //   "0", "false", " ", [], {},  function(){}


if (userEmail.length === 0) {
    console.log("Array is empty" );
}


const emptyobj = {}
if (Object.keys(emptyobj).length === 0) {
    console.log("object is empty")
}




//     ***********   Nullish coalesing Oberator (??)  : null undefined
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 13
val1 = null ?? 10 ??12

console.log(val1);

///      terninary operator


// condition ? true :false


const icetea = 57
icetea <= 80 ? console.log("less then 80") : console.log("more then 80")