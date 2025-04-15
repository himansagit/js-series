//functoin and parameters
// skipped

//functions with objects

function calculateCartPrice(val1, val2 , ...num){
    return num
}

console.log(calculateCartPrice(200, 400, 500))

const user = {
    name : "himanshu",
    email: "example@gmail.com"
}

function handleObject(anyObject){
    console.log(`Name is ${anyObject.name} and email is ${anyObject.email}`)
}

handleObject(user)

const arr = [100, 200, 300, 400]

function returnSecondElement(myarr){
    return myarr[1]
}

console.log(returnSecondElement(arr))