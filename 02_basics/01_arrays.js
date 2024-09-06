// ********************   Arrays * **********************************


const myArray = [0, 1, 2, 3, 4, 5]

const heros = ["RAM", "Hanuman", "laxman"]

const myArr = new Array(1, 2, 3, 4, 5)

//     Array methods 

// myArray.push(6)

// myArray.push(7)

// myArray.pop()


// myArray.unshift(0);

// myArray.shift();
// myArray.shift()

// console.log(myArray.includes(6))
// console.log(myArray.indexOf(5))


const newArr = myArray.join()  // changes the type
// console.log(newArr);
// console.log(myArray);


// **************           Slice  ,  splice        ******************


console.log("A", myArray);

const myn1 = myArr.slice(1, 3)
console.log(myn1);
console.log("B", myn1)

const myn2 = myArr.splice(1, 3)
console.log(myn2);
console.log("c", myn2)