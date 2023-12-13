/////Most Important think in JAVASCRIPT.............................................................
//singleton  ---  
//object literls
//object has Key and value

const mysym =Symbol("Key1")

const jsUser = {
    name : "Munish",
    age: 29,
    location: "Mumbai",
    [mysym]: "myKey1",  //defining symbol in object
    email:"munish.google.com",
    isLoggedIn : true,
    lastLoginDay : "Monday"
}
//to access user
console.log(jsUser.email)//munish.google.com
console.log(jsUser["email"])//munish.google.com
console.log(mysym);

jsUser.greeting = function(){
    console.log(`Hello Js Users, ${this.name}`);
}
console.log(jsUser.greeting());