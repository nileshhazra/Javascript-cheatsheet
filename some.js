var numbers = [1, 2, 3, 4, 5];

console.log(numbers.some((x) => x % 2 === 0));

function isEven(numbers) {
  for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] % 2 === 0) {
      return true;
    }
  }
  return false;
}

isEven(numbers);
