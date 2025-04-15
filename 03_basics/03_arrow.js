const User = {
    usename : "himanshu",
    price : "999",
    welcomeMessage: function (){
        console.log(`${this.usename}, welcome to website`)
    },
}

// User.welcomeMessage()
// User.usename = "Sam"
// User.welcomeMessage()

//console.log(this) // result in empty object {} in node, which is different from browser

// function one(){
//     console.log(this)
// }
// one()

// const one = () =>{
//     let username = "himansh"
//     console.log(this)
// }
// one()

// const addTwo = (num1, num2) =>{
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

// const returnObject = () => ( {username: "himanshu"})
// console.log(returnObject())