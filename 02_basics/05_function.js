


// sayMyName           //called as Reference
// sayMyName();         // Execute


// function addTwoNumbers (number1, number2){
//     console.log(number1 + number2)

// }
  

// console.log("Type Of result ", typeof result)
// console.log( "Result Value ",result)

function addTwoNumbers (number1, number2){
    // let result = number1 + number2 
    // return result


    return number1+number2
}


 const result = addTwoNumbers(3,4)

//  console.log("Type Of result ", typeof result)
//  console.log( "Result Value ",result)

//  function loginUserMessage(username){
//     if(!username){
//         console.log("please enter user name")
//         return
//     }
//     return `${username} just logged In`
//  }

// console.log(loginUserMessage("Rahul"))
 
//  console.log(loginUserMessage())
 


function loginUserMessage(username= "user"){
    if(!username){
        console.log("please enter user name")
        return
    }
    return `${username} just logged In`
 }



// console.log(loginUserMessage("Rahul"))
 
// console.log(loginUserMessage())

// function calculateCartPrice(...num1){           // rest operator
//     return num1
// }

// console.log(calculateCartPrice(2))
// console.log(calculateCartPrice(200, 200, 500))



function calculateCartPrice(val1, val2,...num1){           
    return num1
}

// console.log(calculateCartPrice(2))
// console.log(calculateCartPrice(200, 200, 500))



const user = {
    userName : "rahul",
    price : 876
}

function handleObject(anyobject){
console.log(`userName is ${anyobject.userName} and price is ${anyobject.price}`)

}

// handleObject(user)

const myNewArray =[ 200, 5455, 0, 541]

function returnsecondvalue(getarray) {
    return getarray[1]
}

console.log(returnsecondvalue(myNewArray))