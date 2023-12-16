const coding = ["js","java","python","cpp","nodejs"]

// coding.forEach(function (val){
//     console.log(val);       //js
//                             // java
//                             // python
//                             // cpp
//                             // nodejs
// })

//  ---------------OR -using Arrow function

// coding.forEach( (val) => {
//     console.log(val);
//                                     //  js
//                                     // java
//                                     // python
//                                     // cpp
//                                     // nodejs
// })

// OR -----------------using normal function

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe);


//********************************************Object Itrator on Array******************************/

// const myCoding =[
//     {
//         language : "JavaScript",
//         LanguageFileName : "JS"
//     },
//     {
//         language : "java",
//         LanguageFileName : "j"
//     }, 
//     {
//         language : "Python",
//         LanguageFileName : "Py"
//     }
// ]
// //for each cannot return any value so we use filter see below
// myCoding.forEach ( (item ) => { console.log(item.LanguageFileName); console.log(item.language);})

//+++++++++++++++++++++++++++++++=====filter=====+++++++++++++++++++++++++++++
const myNum = [1,2,3,4,5,6,7,8,9]
const newNums = myNum.filter((num) => num > 4);//[ 5, 6, 7, 8, 9 ]
const newNums1 = myNum.filter((num) => {return num > 4 });//[ 5, 6, 7, 8, 9 ]  // if use scope then use return

console.log(newNums);
console.log(newNums1);