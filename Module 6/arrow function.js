// old function

function sum(num1, num2){
    const result = num1 + num2;
    // console.log(result);
    return result;
}

const output = sum(10, 20);
// console.log("Output is: ", output);



// arrow function
const ans = (num1, num2) => num1 + num2;

console.log(ans);
console.log(ans(45, 58));