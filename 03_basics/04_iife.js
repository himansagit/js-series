// Immediately Invoked Functoin Expression

// function one(){
//     console.log("Hello")
// }

// one()

(function one(){
    // name IIFE
    console.log("Hello")
})();

(()=>{ 
    console.log("Hello 2")
})();

( (name) => { 
    console.log(`Hello ${name}`)
})('himanshu')