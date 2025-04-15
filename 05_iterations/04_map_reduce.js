//const lang = ["js", "python", "ruby", "cpp", "java"]


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const values = arr.filter((item)=>{
//     return item > 5
// })

// const values = arr.map((item)=> item+10).map((item)=> item*10).filter((item)=> item<150)
// console.log(values)

const initialvalue  = 0
const sum = arr.reduce((total,cur)=> total+cur,initialvalue)
console.log(sum)