const accountId =12345
let accountEmail = "sagar@gmail.com"
var accountPassword = "1234"
let accountCity = "Kolkata"
let accountState;
/*
Prefer not use var
because of issue in block scope and functional scope.
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
