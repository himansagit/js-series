// for of

const arr = [1, 2, 3, 4, 5, 6]

// for (const val of arr) {
//     console.log(val)
// }

// greet = "Hello world"
// for (const itr of greet) {
//     console.log(itr)
// }

//maps
// const map = new Map()
// map.set('IN','India')
// map.set('USA', 'United states of America')
// map.set('FR', 'France')
// //console.log(map)

// for (const [key, value] of map) {
//     console.log(key, ':-', value)
// }

// const myObj = {
//     game1 : "NFS",
//     game2 : "GTA",
//     game3 : "COD",
// }
// for (const [key,value] of myObj) { // doesn't work because objects are not iterable
//     console.log(key , ":-", value)
// }

const obj = {
    js : 'javascript',
    cpp : 'C++',
    rb : 'ruby',
}

// for (const key in obj) {
//     console.log(`${key} is for ${obj[key]}`)
// }

for (const key in arr) {
    console.log(key)
}
