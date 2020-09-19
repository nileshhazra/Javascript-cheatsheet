var number = [3, 5, 7, 8, 10];
// ES6 using filter function
var newNumber = number.filter((num) => num >= 5)

//JS using foreach Loop
var newNum = [];
number.forEach(num => {
    if (num >= 5) newNum.push(num);
    return newNum;
});
console.log(newNum);
console.log(newNumber);