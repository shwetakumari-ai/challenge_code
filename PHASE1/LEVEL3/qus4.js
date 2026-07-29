//Check whether a given integer is single-digit, double-digit, or multi-digit.Use the absolute value to handle negatives. Single digit: abs(num) is between 0 and 9. Double digit: between 10 and 99. Multi-digit: 100 or more. Alternatively, count how many times you can divide by 10 before reaching 0 — that gives the digit count. The range-check approach is simpler for this specific problem.
const prompt = require("prompt-sync")();
let num = prompt("Enter an integer: ");
if(isNaN(num)) {
    console.log("Invalid input. Enter an integer.");
}
else {
    let absNum = Math.abs(num);
    if(absNum >= 0 && absNum <= 9) {
        console.log("The number is a single-digit integer.");
    }
    else if(absNum >= 10 && absNum <= 99) {
        console.log("The number is a double-digit integer.");
    }
    else {
        console.log("The number is a multi-digit integer.");
    }
}