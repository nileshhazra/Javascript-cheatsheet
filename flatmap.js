var numbers = [2, 4, 6];

//Using foreach loop
var new_num = [];
numbers.forEach((number) => {
  new_num.push(number, number * 2);
});

console.log(new_num);
//Using flatmap
var newNumbers = numbers.flatMap((x) => [x, x * 2]);

console.log(newNumbers);
