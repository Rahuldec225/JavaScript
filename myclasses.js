// ES6


// class user {
//     constructor(username, email, password) {
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }

//     encryption(){
//         return `${this.password}abc`
//     }
//     changeUserName(){
//         return `${this.username.toUpperCase()}`
//     }
// }


// const chai = new user("chai", "chai@gmail.com", "1847")


// console.log(chai.encryption())
// console.log(chai.changeUserName())
  

//              behind the seen


function user(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

user.prototype.encryption = function(){
    return `${this.password}abc`
}
user.prototype.changeUserName = function(){
        return `${this.username.toUpperCase()}`
    }

const tea = new user("chai", "chai@gmail.com", "1847")


console.log(tea.encryption())
console.log(tea.changeUserName())