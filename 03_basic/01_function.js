//function

// function sayMyName () {

//     console.log("Munish");
//     console.log("Sharma");

// }
// // sayMyName //is is referance 
// sayMyName() // this is function call

// function addTwoNumbers (number1,number2){
//     console.log(number1+number2);
// }

function addTwoNumbers (number1,number2){
        //  let result =  number1+number2;
        //  return result
        return number1+number2
     }

const result = addTwoNumbers(3,4) 
console.log("Result: ", result);


function loginUserMessage (userName){
    if(!userName) {
        console.log("please enter userName")
        return
}
    return `${userName} Just LoggedIn`

}

console.log(loginUserMessage("Munish"));

//****************rest oprator ...  these 3 dot is call restOprator it is used if we have multiple value
//for single paramenter. it make value in bundle
function calculateCartPrice (...num1){
    
    return num1;
}
console.log(calculateCartPrice(200,400,500));

const user = {
    userName: "munish",
    price: 199
}

function handleObject (anyObject) {
    console.log(`User Name is  ${anyObject.userName} and Price is ${anyObject.price}`)
}

handleObject(user)

const myNewArray =[200,400,500,600]
function returnSecondValue (getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));

