const score = 400;
//console.log(score);  //400
 
//defining Number in JS
const balance = new Number(100)
//console.log(balance);  //[Number: 100]

//console.log(balance.toFixed(2)); //100.00

const otherNumber = 23.8423
//console.log(otherNumber.toPrecision(3)); //23.8
const otherNumber1 = 123.8923
//console.log(otherNumber1.toPrecision(4)); //123.9

const hundreds = 10000000;
//console.log(hundreds.toLocaleString('en-In')); //1,00,00,000

// +++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++
console.log(Math);
console.log(Math.abs(-4));//5
console.log(Math.round(4.6));//5
console.log(Math.ceil(4.2));//5
console.log(Math.floor(4.2)); //4
console.log(Math.min(2,4,5,2,1,3,4,6,78,)); //minimum value 1
console.log(Math.max(2,4,5,2,1,3,4,6,78,)); //maximum value 78
 console.log(Math.random());  // always give random value betbeen 0 and 1

 console.log(Math.random()*10); // multiple by 10 to get value 0,9
 console.log((Math.random()*10) + 1); // to avoid value 0 now its not 0   

 const min =10;
 const max =20;

 console.log(max-min+1); //11
 let val =console.log((max-min+1)+min); //21
 console.log(Math.floor(Math.random())) //0
 console.log(Math.floor(Math.random()*(max-min+1)+min));  // give any random number betbeen 10 to 20