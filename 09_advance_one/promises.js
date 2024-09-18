const promiseOne = new Promise((resolve, reject) => {
    // Do an Async task
    // DB calls, Cryptography, network

    setTimeout(() => {
        console.log('Async task is compeleted');
        resolve()
    }, 1000);

})

promiseOne.then(function(){
    console.log(`promise consumed`);
})



new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log(`async task 2`);
        resolve()
    },1000)
}).then(function(){
    console.log(`async resolve`)
})



const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
       resolve({
        username : "chai",
        email: "chai@gmail.com"
       }) 
    }, 1000);

})

promiseThree.then(function(user){
    console.log(user)
})


const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if (!error){
            resolve({
                username : "chai",
                password: "123"
               }) 
        } else{
            reject(`error some thing went wrong`)
        }
       
    }, 1000);

})

promiseFour.then(function(user){
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username)
}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log("the promise is either resolve or rejected")
})


const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if (!error){
            resolve({
                username : "chai",
                password: "123"
               }) 
        } else{
            reject(`error: JS went wrong`)
        }
       
    }, 1000)


 

});

async function consumePromiseFive(){


    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error)
    }
    
}


consumePromiseFive()






