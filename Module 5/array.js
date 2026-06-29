var test = "Test";

var elements = ["habib", 5, "kobir", test, {name : "Jhon"}, ["rohim", "korim"]];

// console.log(elements)
// console.log(elements.length)
// console.log(elements[3])

elements.push("Halim") // add new element in last index on the array
elements.pop()  // delete last element from the array

elements.unshift("munim"); // add new element in the first index on the array

elements.shift(); // delete first element from the array

console.log(elements)
console.log(elements.length)