var number = [3, 5, 7, 8, 10];

// var newNumber = number.reduce(function (accumulator, currentNumber) {
//     console.log("accumulator = " + accumulator);
//     console.log("currentNumber= " + currentNumber);
//     return accumulator + currentNumber;
// })

var newNumber = number.reduce((accumulator, currentNumber) => accumulator + currentNumber)

console.log("Sum = " + newNumber);