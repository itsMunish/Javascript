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
