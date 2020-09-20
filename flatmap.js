var numbers = [2, 4, 6];

var newNumbers = numbers.flatMap(x => [x, x * 2])

console.log(newNumbers);