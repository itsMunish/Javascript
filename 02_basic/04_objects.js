//const tinderUser = new Object() //singleton object
const tinderUser = {}
tinderUser.id = 1;
tinderUser.name ="Munish";
tinderUser.isLoggedIn = true,
console.log(tinderUser);

//nested object
const regularUser ={
    email : "munish.sharma@gmail.com",
    fullName : {
        userFullName :{
            firstName:"Munish",
            LastName:"Sharma"
        }
    }
}
console.log(regularUser.fullName.userFullName.firstName);

//merge object

const obj ={
    1:"a",
    2:"b"
}
const obj1 = {3:"a", 4:"b"}

//const obj3 = {obj,obj1}
//const obj3 = Object.assign({},obj,obj1) //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
//in above example meaning of {} empty is to store all onject data into {} object
//console.log(obj3);

// _________________________________________--or____________________________________________

const obj3 = {...obj,...obj1}
console.log(obj3);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

