const accountId = 123
let accountEmail = "test123@gmail.com"
var accountPassowrd = "12345" // do not use var because it doesn't have scope functionality
accountCity = "Varanasi"
let accountState; // variables declared without assignment are 'undefined'
//accountId = 2 // cannot change const variables
accountEmail = "secondemail@gmail.com"
accountPassowrd = "qwerty"
accountCity = "Prayagraj"

console.table([accountId, accountEmail, accountPassowrd, 
    accountCity, accountState]);