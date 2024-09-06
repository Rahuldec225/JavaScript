const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Thsuparmanor", "flash", "batman"]


// marvel_heros.push(dc_heros)
// console.log(marvel_heros)

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros)

// const all_heros = [...marvel_heros,...dc_heros]

// console.log(all_heros)


// const another_array = [1, 3, 4, 6, [3, 55, 34, 34, [78,76,760], 86 ]]

// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);


console.log(Array.isArray("Rahul"))
console.log(Array.from("Rahul"))
console.log(Array.from({name: "rahul"}))    // interesting

let score1 = 100
let score2 = 100
let score3 = 100


console.log(Array.of(score1,score2, score3))
