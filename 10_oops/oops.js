//  object literal

const user = {
    username : "rahul",
    logincount : "5",
    signedIn : true,
    getUserDetail :function(){
        // console.log(`connected to dB`);
        // console.log(`User name = ${this.username}`);
        
        console.log(this);
        
    }
}

// console.log(user.username)
// console.log(user.getUserDetail())





// ******  constructor Function



function User(username, logincount, isLoggedIn ){
     this.username = username
     this.logincount = logincount
     this.isLoggedIn = isLoggedIn

     return this
}


const userOne = new User("hitesh", 6, true)
 console.log(userOne)
const userTwo = new User("chai aur code", 10, false)
 console.log(userOne)



// new Key Word =>>>>  step 1 =>>>  EMPTY object is created called as instance
//                     step 2 =>>>  constructor function is called 
//                     step 3 =>>>  all argument is injected in "this" keyword
//                     step 4 =>>>  we get all these in these functions