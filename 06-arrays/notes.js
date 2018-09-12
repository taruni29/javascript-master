// your notes here!
console.log("hello world!");
var fruits = ['Apple', 'Banana'];
var last = fruits[fruits.length - 1];
console.log(last);
var first = fruits[0];
console.log(first);
fruits.forEach(function(item, index, array) {
  console.log(item, index);
});
var newLength=fruits.push("orange");
console.log(fruits);
var newlength=fruits.pop("orange");
console.log(fruits);
var newlength=fruits.unshift("grape");
console.log(fruits);
var newlength=fruits.shift("grape");
console.log(fruits);
