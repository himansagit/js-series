// Based on how datatypes are stored and referenced 
// datatypes can be broadly categorised in two types

// primitive datatypes : Call by value
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt
const score = 100
const value = 100.3
 
const isLoggedIn = true
const outTemp = null
let userEmail // undefined
const id = Symbol('123')
const anotheId = Symbol('123')
console.log(id === anotheId)

// Reference (Non-primitve) Types : Reference
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name : "Himanshu",
}

const myFunction = function(){
    console.log("hello world")
}

console.log(typeof heros)

// ----------------------------------------------------------------------------///
// Stack(Primitive) , Heap (Non-primitive)

