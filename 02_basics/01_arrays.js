//multiple itesm in one variable
// resizable
// can be mixed data types
// arrays within arrays
// zero indexed
// shallow copies 
const arr = [0, 1, 2, 3, 4, 5, 6]
const myHeros = ["shaktiman", "naagraj"]
const myArr = new Array(1,2,3,4,5)

// console.log(arr[0])

// array methods

// arr.push(7)
// console.log(arr)
// arr.pop()
//arr.unshift(9)
//arr.shift()
//console.log(arr.includes(9))
// console.log(arr.indexOf(9))

// const newArr = arr.join()
// console.log(arr)
// console.log(typeof newArr)
//slice and splice 

const arr1 = arr.slice(0,3);
console.log(arr1)
console.log("A ",arr)
const arr2 = arr.splice(0,3)
console.log(arr2)
console.log("B ", arr)