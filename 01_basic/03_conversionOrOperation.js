// type conversion
let score = "33abc";
console.log(typeof score); //string
console.log(typeof(score)); //string

let valueInNumber = Number(score);
console.log(valueInNumber);  // NaN
console.log(typeof valueInNumber);  //number


let score1 = null;
console.log(typeof score1); //object
console.log(typeof(score1)); //object

let valueInNumber1 = Number(score);
console.log(valueInNumber1);  // NaN
console.log(typeof valueInNumber1);  //number


// "33" => 33
// ""33abc => NaN
// true => 1; false =>0

let isLoggedIn = 1;
let bolleanIsLoggedIn  = Boolean (isLoggedIn);
console.log(bolleanIsLoggedIn);