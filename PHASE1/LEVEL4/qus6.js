//Take two numbers and check if both are positive and their sum is less than 100.Three conditions connected with AND: a > 0 AND b > 0 AND (a + b) < 100. All three must hold. The parentheses around a + b are important for clarity (though not strictly needed due to operator precedence). This trains you on multi-condition AND chains.
const prompt = require("prompt-sync")();
let a = parseFloat(prompt("Enter first number: "));
let b = parseFloat(prompt("Enter second number: "));
if (isNaN(a) || isNaN(b)) {
    console.log("Invalid input. Please enter valid numbers.");
}
else{
    if (a > 0 && b > 0 && (a + b) < 100) {
        console.log("Both numbers are positive and their sum is less than 100.");
    }
    else {
        console.log("The conditions are not met.");
    }
}