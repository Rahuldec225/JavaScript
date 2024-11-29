// let myName = "Rahul"
// let myChannel = "Chai"


// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "slings",

    getspiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`)
    }
}

Object.prototype.rahul = function(){
    console.log(`rahul is present in all objects`);
    
}


// console.log(heroPower);
// heroPower.rahul()
// myHeros.rahul()


Array.prototype.heyRahul = function(){
    console.log(`hey Rahul  `);
    
}

// myHeros.heyRahul()
// heroPower.heyRahul()




//       inheritance




const user = {
    name : "rahul",
    emailId: "rahuolsmlkm@.com"
}

const teacher = {
    makeVideo: true
}

const teachingsupport = {
    isAvailable: true
}


const TA = {
    makeAssignment: true,
    fullTime: true,
    __proto__: teachingsupport
}

teacher.__proto__ = user    // old syntax

//  modern syntax

Object.setPrototypeOf(teachingsupport, teacher)




let anotherUserName = "chai aur code      "

String.prototype.trueLength = function(){
    console.log(`${this}`)

    console.log(`True Length is  ${this.trim().length}`)

}

anotherUserName.trueLength()
"ra  hul   ".trueLength()
"icetea".trueLength()