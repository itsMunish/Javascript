// In java script date start from January 1970.


let date = new Date();
console.log(date);  //2023-12-10T10:57:32.778Z
console.log(date.toString()); //Sun Dec 10 2023 10:58:06 GMT+0000 (Coordinated Universal Time)
console.log(date.toDateString()); //Sun Dec 10 2023
console.log(date.toLocaleString()); //12/10/2023, 10:59:23 AM
console.log(typeof(date)); //object

let myCreateDate =  new Date(2023,0,23);
console.log(myCreateDate); 
console.log(myCreateDate.toDateString()); //Mon Jan 23 2023

////timestamp is in milisecond

let myTimeStamp =  Date.now();
console.log(myTimeStamp); //1702206270528
console.log(myCreateDate.getTime())