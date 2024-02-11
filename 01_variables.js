const accountId = 144553
let accountEmail = "mz8512542@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;
//accountId = 2 // not allowed

console.log(accountId);

/*
Prefer not use var
because of issue in block scope and functional scope
*/

accountEmail = "mohdusama24@gmail.com"
accountPassword = "75835"
accountCity = "Bengaluru"
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])