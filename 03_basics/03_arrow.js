
const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function()
        {
            // console.log(`${this.username} , welcome to website`);     
            // console.log(this)
        }
    
}

// user.welcomeMessage()
// user.username= "rahul"
// user.welcomeMessage()

// console.log(this)




// function chai(){
//     let username = "Rahul"
//     console.log(this.username)  // this does work on objects
//     console.log(this)
// }

// chai()



// const chai = function (){
//     let username = "Rahul"
//     console.log(this.username)  // this. => work on objects only
//     //  console.log(this)
// }
// chai()


//     arrow function

const chai =  () =>{
    let username = "Rahul"
    console.log(this.username) 
    
}

// chai()

// const addtwo = (num1, num2) => {
//     return num1 + num2
//}



//const addtwo = (num1, num2) =>  (num1 + num2)


//const addtwo = (num1, num2) =>  num1 + num2

const addtwo = (num1, num2) => ({username: "rahul"})



console.log(addtwo(8, 4))

const myArray = [3, 4, 5, 7, 4, 456]