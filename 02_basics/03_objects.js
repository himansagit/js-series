// singleton

// Object.create() // creating object thourgh constructor

// object literals
const JsUser = {
    name : "himansh",
    "full name": "Himanshu Singh",
    age: 31,
    locatoin: "jaipur",
    email: "example@gmail.com",
    isLoggedIn: false,
    lostLoggedIn: ["monday", "truesday"]
}
// console.log(JsUser.email)
// console.log(JsUser["email"])

// //  console.log(JsUser."full name") // can't user this
// console.log(JsUser["full name"])

// function in objects

JsUser.getInfo = function (){
    console.log(this["full name"])
}
JsUser.getInfo()
