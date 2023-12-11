const marvalHeros = ["thor", "ironman", "spiderman"];
const dc = ["superman","flash","batman"];
//push methods
// marvalHeros.push(dc);
// console.log(marvalHeros);
// console.log(marvalHeros[3][2]);

// concatantion
// let val = marvalHeros.concat(dc); //'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman
// console.log(val);

//spread ...
// const all_New_Heroes = [...marvalHeros,...dc]
// console.log(all_New_Heroes); //'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' 

//multi array

const another_Array =[1,2,3,[4,6,5],7,[6,7,8,[4,5]]]
const real_another_array = another_Array.flat(Infinity);
console.log(real_another_array);
//1, 2, 3, 4, 6,
// 5, 7, 6, 7, 8,
// 4, 5

//string to array
console.log(Array.from("Munish")); //[ 'M', 'u', 'n', 'i', 's', 'h' ]