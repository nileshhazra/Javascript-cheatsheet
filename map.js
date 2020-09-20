var list = [1, 5, 7, 32, 55];
var ll = [];
// Using foreach loop
list.forEach(x => {
    ll.push(x * 2);
});
console.log(ll);;
// Using map function 
var newlist = list.map((x) => x * 2);

console.log(newlist);