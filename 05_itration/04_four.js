const array1 = [1,2,3]
// const initialValue = 0;
// const sumWithInitialValue = array1.reduce(
//     (accumlator,currentValue) => accumlator+currentValue,
//     initialValue)
// console.log(sumWithInitialValue); //6

const totalVal = array1.reduce(function (acc, currVal) {
    return acc+currVal
}, 0)

console.log(totalVal); //6