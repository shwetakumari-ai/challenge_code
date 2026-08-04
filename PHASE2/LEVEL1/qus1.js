//Think of a counter starting at 1. Each step: print the counter, then increase by 1. Stop when it exceeds 10. This is the most fundamental use of a for loop — you know the exact start (1), end (10), and step (+1). In Java, the for loop has three parts: initialization, condition, and increment.
const prompt = require("prompt-sync")();
let num = parseInt(prompt("Enter a number to count up to (max 10): "));
if (isNaN(num) || num < 1 || num > 10) {
    console.log("Invalid input. Please enter a number between 1 and 10.");
} else {
    for (let i = 1; i <= num; i++) {
        console.log(i);
    
    }
}