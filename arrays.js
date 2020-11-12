var myFruits = ["Apple", "Pear", "Strawberry"];
var myVegies = ["Capsicum", "Onion", "Potato"];

var myFood = myFruits.concat(myVegies);
console.log(myFood);

// myFood.splice(2, 0, "Lemon", "Chilli");  
// console.log(myFood); 
myFood.splice(2, 2, "Lemon", "Chilli");
console.log(myFood);
myFood.push('Brocolli')
console.log(myFood);
myFood.pop()
console.log(myFood);