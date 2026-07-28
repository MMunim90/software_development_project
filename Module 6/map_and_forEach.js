const products = [
    {id: 1, name: "xiaomi", description: "This is xiaomi phone", price: 500, color: "Black"},
    {id: 2, name: "iphone", description: "This is iphone phone", price: 800, color: "Black"},
    {id: 3, name: "oppo", description: "This is oppo phone", price: 300, color: "White"},
    {id: 4, name: "iphone", description: "This is iphone phone", price: 1100, color: "Red"},
    {id: 5, name: "xiaomi", description: "This is xiaomi phone", price: 600, color: "Gray"}
]


// map
const sum = products.map(product => product.id*2);
// console.log(sum);

// forEach
const result = products.forEach(product => {
    console.log(product.id);
});