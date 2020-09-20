var number = [3, 5, 7, 8, 10];
// JavaScript
var newNum = number.reduce(function (accumulator, currentNumber) {
  console.log("accumulator = " + accumulator);
  console.log("currentNumber= " + currentNumber);
  return accumulator + currentNumber;
});
console.log(newNum);

//ES6 arrow function
var newNumber = number.reduce(
  (accumulator, currentNumber) => accumulator + currentNumber
);

console.log("Sum = " + newNumber);
