const descriptor = Math.PI
// console.log(descriptor)


// console.log(Object.getOwnPropertyDescriptor(Math, 'PI'))



const chai = {
    name : "chai",
    price: 342,
    isAvailable : true
}
console.log(Object.getOwnPropertyDescriptor(chai, 'name'))


Object.defineProperty(chai, "name",{
    writable: false,
    enumerable:false,
    configurable : false
})


console.log(Object.getOwnPropertyDescriptor(chai, 'name'))

for (const [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function'){
        console.log(`${key}: ${value}`)
    }
}