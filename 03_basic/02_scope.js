//*********************************Scope********************************************//
let a = 10
const b= 20
//var c = 30  // var doesn't follow scope.so that we can't use it in java script

// Nested function we can call outer function functionality into inner function but cannot fatch outer function functionality into outer function
// it is also called as closer
function one () {
    let userName = "Munish";

    function two (){
        let website = "youtube";
        console.log(userName);

    }
  //  console.log(website);
    two()
}
one()
//++++++++++++++++++++++++++++++++++++++++++++++++Intresting ++++++++++++++++++++++++++++++++++++++++
console.log(addone(5));
function addone (num1){
    return num1 + 1;
}

// console.log(addTwo()); //Cannot access 'addTwo' before initialization
const addTwo = function (num2){
    return num2 + 2
}
console.log(addTwo(5))
