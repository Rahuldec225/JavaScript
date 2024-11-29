function Setuser(userName){
    this.userName = userName
    console.log(`username is called`)
};

function CreateUser(userName, email, password){
    Setuser.call(this, userName)
    this.email = email
    this.password = password

}

const chai = new CreateUser("chai", "chai@gmail.com", "123123")
console.log(chai);




