class user {
    constructor(username) {
        this.username = username
    }
    logMe(){
        console.log(`Username is ${this.username}`);
        
    }
}


class Teacher extends user {
    constructor(username , email , password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const chai = new Teacher("chai", "chai@gmail.com", "kfsdls")

console.log(chai);
chai.addCourse()



console.log(chai instanceof user)