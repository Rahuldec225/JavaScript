 class User{
    constructor(Username){
        this.Username = Username
    }
    logMe(){
        console.log(`username: ${this.Username}`)
    }
    
    static createId(){
        return Math.floor(Math.random()*1000) 
    }
 }

 const hitesh = new User("rahul")
//  console.log(hitesh.createId())




 class Teacher extends User {
    constructor(Username , email , password){
        super(Username)
        this.email = email
        this.password = password
    }

}

const iphone = new Teacher("iphone","iphone@WebGLTransformFeedback.com" , "password")
console.log(iphone.createID());
