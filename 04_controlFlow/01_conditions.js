// const month = 3;
// switch (month) {
//     case 1:
//         console.log("january");
//         break;
//     case 2:
//         console.log("February");
//         break;
//     case 3:
//         console.log("march");
//         break;

//     default:
//         console.log("No case Match");
//         break;
// }
//------------------------------Nullish Colescing Operator----------------------------------------------

let val;
val = 5 ?? 10;  // if case we got two value from backen then we use this case.
console.log(val);

let val1;
val1 = null ?? 10;  //10 / it does not take numm in this time
console.log(val1);

let val2;
val2 = undefined ?? 15;  //15 / it does not take num in this time
console.log(val2);


//------------terniary Operator-----------
//condition ? true : false
const iceTeaPrice = 100;

iceTeaPrice <= 80 ? console.log("less then 80") : console.log("more than 80");