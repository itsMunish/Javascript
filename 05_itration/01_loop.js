//for
// const fruits = ["apple","banana","orange","papaya"]
// console.log(fruits.length);
// for (let index = 0; index < fruits.length; index++) {
//     const element = fruits[index];
//     console.log(element);
    
// }

// const arr = [1,2,3,4]
// for (const iterator of arr) 
// {
//     console.log(iterator);
    
// }

const greeting = "Hello Word"
for (const greet of greeting) {
    // console.log(`Each char in ${greet}` );
}

//Maps

const map = new Map()
map.set('IN', 'India')
map.set('USA',"United States of America")
map.set('FR', 'France')
// console.log(map);

for (const [key,value] of map){
    console.log(key, ":", value);
}