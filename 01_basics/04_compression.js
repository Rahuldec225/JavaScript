console.log("2" > 1)          // =>  true
console.log("2" > 1)            // =>  true

console.log("02" > 1)               // =>  true

console.log(null > 0)               // =>  false
console.log(null == 0)              // =>  false
console.log(null >= 0)              // =>  true


/*    *********NOTE **********


1.    console.log(null >= 0) — Output: true

          Comparison logic (>=): When comparing null >= 0, JavaScript converts null to a number   first.

          null becomes 0, and the comparison becomes 0 >= 0, which is true.


 2. console.log(null == 0) — Output: false

         Comparison logic (==): The loose equality == doesn't convert null to a number. Instead, null is only considered loosely equal to undefined.

         Since null is not equal to 0, the result is false.
 
 */




console.log(undefined > 0)          // =>   False
console.log(undefined == 0)         // =>   False
console.log(undefined >= 0)            // =>   False