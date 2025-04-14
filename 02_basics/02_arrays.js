const marvel = ["thor", "ironman", "spiderman"]
const dc = ["superman", "flash", "batman"]

// marvel.push(dc) // append whole array dc as single element in marvel
//console.log(marvel)

// const arr = marvel.concat(dc)
// console.log(marvel)
// console.log(arr)

const all_heros =  [...marvel, ...dc]
console.log(all_heros)

const arr = [1, 2, 3, [4, 5, 6], 7, [8, 9, 10, [11, 12]]]
console.log(arr)
const arrflat = arr.flat(Infinity)
console.log(arrflat)