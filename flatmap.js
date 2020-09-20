var numbers = [2, 4, 6];

//Using foreach loop
var new_num = [];
numbers.forEach(x => {
    new_num.push(x, x * 2)

});

console.log(new_num);
//Using flatmap
var newNumbers = numbers.flatMap(x => [x, x * 2])

console.log(newNumbers);