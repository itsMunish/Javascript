// immediatly Invoked Function Expression (IIFE)

//IIFE function --to immediatly call the function we write function inside () backtics
//(function defincation / funtion) (finction execution)
//()();
(function chai (){
    console.log(`DB Connected`);
})();  //DB Connected

(() => {
    console.log(`DB Connected again`);
})();  //DB Connected