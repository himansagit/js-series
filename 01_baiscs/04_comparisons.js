// console.log(2 > 1)
// console.log(2 >= 1)
// console.log( 2 == 1)
// console.log(2 !=1 )

// what if we compare two different data types
console.log("2" > 1)
console.log("02" > 1)
console.log(null > 0) // false
console.log(null == 0) // false
console.log(null >= 0) // true why? because comparision operator 
// > < >= <= work differently than check for equality ==
// comparision operator force null to typecasted to number 0 and == doesn't
// comparion and equality check are different
// Overall avoid these type of expression that can result in unexpected results

// === strict check, checks both value and datatype
