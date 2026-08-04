// Take three numbers and check if they are in geometric progression.Three numbers a, b, c are in GP if the ratio between consecutive terms is the same: b/a == c/b. This simplifies to: b² == a × c (the middle term squared equals the product of extremes). Use multiplication form (b*b == a*c) instead of division to avoid division-by-zero and floating-point issues. Guard against zero values.
const prompt = require("prompt-sync")();
let a = parseFloat(prompt("Enter the first number: "));
let b = parseFloat(prompt("Enter the second number: "));
let c = parseFloat(prompt("Enter the third number: "));
if (isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log("Invalid input. Please enter valid numbers.");
}
else {
    if (a === 0 || b === 0 || c === 0) {
        console.log("One or more numbers are zero. Please enter non-zero numbers.");
    }
    else {
        if (b * b === a * c) {
            console.log("The numbers are in geometric progression.");
        }
        else {
            console.log("The numbers are not in geometric progression.");
        }
    }
}