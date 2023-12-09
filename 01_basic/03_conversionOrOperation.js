// ******************type conversion**************************
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


//********************************Operations *****************************//

let value = 3
let negvalue = -value;
 // console.log(negvalue)  //-3

 let str = "munish";
 let str1 = " sharma";
 let str2 = str+ str1;
 console.log(str2);

 console.log("1" + 2); //12
 console.log(1+"2");  //12
 console.log("1"+"2");//12
 console.log("1"+2 + 2); //122
 console.log(1+2 + "2");   //32

 let gameCounter = 100
 gameCounter++; 
 console.log(gameCounter);

 // perfix and postfix https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
 