// Immediately Invoked Function Expressions (IIFE)


//   => IIFE is used to remove the pollution caused due to global scope variable 


(function chai(){                   //  =>>>  named Iife
    console.log(`DB CONNECTED`)
})();



(() => {
    console.log(`DB CONNECTED TWO`)         //   =>>>  unnamed IIFE
})();


((name) => {
    console.log(`DB CONNECTED TWO ${name}`)
})("Hitesh");

