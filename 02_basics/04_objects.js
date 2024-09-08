// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "djfn123"
tinderUser.name  = "samay"
tinderUser.isLoggedIN = false

// console.log(tinderUser);

const regularUser = {
    email : "skfhsf@sufh.com",
    fullName : {
        userName : {
            firstName : "rahul",
            lastName : "PARAJAPATI"
        }
    }
}

// console.log(regularUser.fullName.userName.firstName)



const obj1 = {
    1 : "s",
    2 : "g"
}

const obj2 = {
    3 : "h",
    4 : "gf"
}

// const obj3 = { obj1 , obj2};
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1,  ...obj2}
//console.log(obj3);



const users = [
    {
        id:1,
        email : "djfhdk"
    },
    {
        id:1,
        email : "djfhdk"
    },
    {
        id:1,
        email : "djfhdk"
    },
    {
        id:1,
        email : "djfhdk"
    },
]



users[1].email


// console.log(tinderUser)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))


// console.log(tinderUser.hasOwnProperty('isLoggedIN'))


// ******* Destructuring ***************************


const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "hitesh"
}


//  course.courseInstructor



const {courseInstructor: instructor} = course



// console.log(courseInstructor)
console.log(instructor)


//    ********   APIs     ***********


// ********JSON ********   JAVASCRIT object Notation

// {
//     "name" : "hitesh",
//     "coursenames" : "js hindi",
//     "price" : "free"
// }



[
    {},
    {},
    {}
]


