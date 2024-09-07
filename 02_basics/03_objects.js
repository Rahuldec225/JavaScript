// singleton   => object made of constructur


// object Literals
//Object.create
 const mySym = Symbol("key1");

const jsUser = {
    name : "Rahul",
    fullName : "rahul prajapati",
    [mySym] : "My symbol",
    age : 18,
    location : "jaipur",
    email : "dushduk@hdg.com",
    isLogin : false

}
//  console.log(jsUser["name"])
//  console.log(jsUser["fullName"])
//  console.log(jsUser[mySym])
 

//  console.log(jsUser["email"])

 
 // to fix this value
//  Object.freeze(jsUser)
 
 
 //  change value of object
jsUser.email = "rajhavj@sjsd.com"

// console.log(jsUser.email)






jsUser.greeting = function(){
    console.log("hello Js User")
}


jsUser.greetingTwo = function(){
    console.log(`hello Js User, ${this.name}`)
}



console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
