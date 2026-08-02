//Take three numbers and check if they are in arithmetic progression.Three numbers a, b, c are in AP if the difference between consecutive terms is the same: b - a == c - b. This simplifies to: 2b == a + c (the middle term is the average of the other two). Sort them first if the order isn't guaranteed. The "2 × middle = sum of extremes" formula is a quick and elegant check.
const prompt = require("prompt-sync")();
let a = parseFloat(prompt("Enter the first number: ")); 
let b = parseFloat(prompt("Enter the second number: "));
let c = parseFloat(prompt("Enter the third number: "));
if (isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log("Invalid input. Please enter valid numbers.");
}
else{
    //Sort them first if the order isn't guaranteed. The "2 × middle = sum of extremes" formula is a quick and elegant check.
    let numbers = [a, b, c].sort((x, y) => x - y);
    let [x, y, z] = numbers;
    if (2 * b === a + c) {
        console.log("The numbers are in arithmetic progression.");
    }
}