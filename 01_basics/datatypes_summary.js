// categories of datatype is based on how data is stored in memory and how it is accessed 
/*
        #premitive Datatype  (refernce)
        {
        String
        Number
        Boolean
        Null
        Undefined
        Bigint 
        Symbol
        }


        Non_Premitive Datatype (Reference)
        {
        Array
        objects
        Functions
        }
*/

const id = Symbol('123')
const anotherId = Symbol('123')
 console.log(id == anotherId)


const bigNumber = 564163516452n




// Arrays

const heros = ["asdg","hf", 232]


// Objects

let myObj = {
    Name : "fduy",
    age : 22
}

const myFunction = function(){
    console.log("this is function")
}


console.log(typeof bigNumber )




/* #####       memory type    ######
  
        stack (Premitive),  Heap (Non-Premetive)

*/

