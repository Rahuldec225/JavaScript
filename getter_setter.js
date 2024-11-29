class User{
    constructor(email,password){
        this.email = email;
        this.password = password

    }
    get email(){
        return `this._email: ${this._email}`
    }
    set email(value){
        this._email = value.toUpperCase()
    }


    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password = value
    }
}

const chai = new User("chai@jfdl.com", "sdhfbsk")

console.log(chai.password);
console.log(chai.email);
