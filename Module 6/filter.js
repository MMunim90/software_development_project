const products = [
    {id: 1, name: "xiaomi", description: "This is xiaomi phone", price: 500, color: "Black"},
    {id: 2, name: "iphone", description: "This is iphone phone", price: 800, color: "Black"},
    {id: 3, name: "oppo", description: "This is oppo phone", price: 300, color: "White"},
    {id: 4, name: "iphone", description: "This is iphone phone", price: 1100, color: "Red"},
    {id: 5, name: "xiaomi", description: "This is xiaomi phone", price: 600, color: "Gray"}
]


const result = products.filter(product => product.color == "Black");

if(result.length == 0){
    console.log("No Black color phone found");
}else{
    console.log(result);
}