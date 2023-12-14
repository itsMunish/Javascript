const user = {
    userName : "Munish",
    Price : 299,
    welcomeMessage: function(){
        console.log(`${this.userName}, Welcome to website`);
 
    }
}
user.welcomeMessage()
// function chai (){
//     console.log(this);
// }
// chai()

//-----------------------------------Arrow Function----------------------------------

// const chai = () => {
   
//             console.log(this);
// }
// chai()


//------------------------Implecit return function----------------------
const addTwo = (num1, num2) => ( num1+num2)

   console.log(addTwo(3,4))
