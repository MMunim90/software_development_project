const products = [
    {id: 1, name: "xiaomi", description: "This is xiaomi phone", price: 500, color: "Black"},
    {id: 2, name: "iphone", description: "This is iphone phone", price: 800, color: "Black"},
    {id: 3, name: "oppo", description: "This is oppo phone", price: 300, color: "White"},
    {id: 4, name: "iphone", description: "This is iphone phone", price: 1100, color: "Red"},
    {id: 5, name: "xiaomi", description: "This is xiaomi phone", price: 600, color: "Gray"}
]


// old way
// for(let i=0; i<products.length; i++){
//     // console.log(products[i]);

//     const element = products[i];
//     // console.log(element);

//     if(element.id == 3){
//         console.log(element);
//     }
// }


//  ES6 way
const result = products.find(pd => pd.color == "Black")

console.log(result);