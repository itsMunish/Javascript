// we cannot change const value
const accountId = "12344";
// we use let
let accountName = "munish";

// we cannot use var because variable doen't have scope
/* prefer not to use var
because of issue in block and functional scope */
var accountEmail = "munish@gmail.com";

accountCity = "Mumbai"; //this is not good way of programming-

let accountState

//accountId = 3;
accountEmail = "xyz@gmail.com";
accountName = "sharma";
accountCity = "jaipur";

console.log(accountId);
console.table([accountId,accountEmail,accountName,accountCity, accountState])
// the value of accoutState is Undefined.because we havn't insallize it.
