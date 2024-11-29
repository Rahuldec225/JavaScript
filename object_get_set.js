const chai = {
    _email: "dafh@gmail.com",
    _password : "rahul chai",

    get email (){
        return this._email.toUpperCase()
    },
    set email(value){
            this._email = value
    }
}


// console.log(chai)

const tea = Object.create(chai)
console.log(tea.email);
console.log(tea._email);
