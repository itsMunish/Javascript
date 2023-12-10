//Array's Object ----------[43,fre,ffre,fg.e,fw3]
const myArr =[0,1,2,3,4,5];
console.log(myArr);
console.log(myArr[2]);

//javascript create shallow copies. it means it change the orignal array.
// Deep Copies. do not share the same referance

const myHeors = ["saktiman", "krish"];
const myArr2 = new Array(1,2,3,4);
console.log(myArr2[2]);

// Array Methods
//push
myArr2.push(6);
console.log(myArr2);
myArr2.pop();
console.log(myArr2);
myArr2.unshift(0);
console.log(`unshift value ${myArr2}`);
myArr2.shift(0);
console.log(`shift value ${myArr2}`);

//include
console.log(myArr2.includes(3));

//index of
console.log(myArr2.indexOf(3));

//join add element in the form of string
const newArr = myArr2.join();
console.log(myArr2); [ 1, 2, 3, 4 ]
console.log(newArr); //in the for of string 1,2,3,4
console.log(typeof(newArr)); //string

//slice and splice
console.log('a',myArr); //a [ 0, 1, 2, 3, 4, 5 ]
const myarrnew = myArr.slice(1,3);  //slice cannot change the origanl arry only change the range
console.log('b',myArr);
console.log(myarrnew); //[ 1, 2 ]


const myarrnew1 = myArr.splice(1,3);
console.log('c',myArr);  //splice change the origanl array
console.log(myarrnew1); //[ 1, 2 ,3]
