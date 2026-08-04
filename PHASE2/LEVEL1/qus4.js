// Print numbers from 10 down to 1.
const prompt = require ("prompt-sync")();
let num = parseInt(prompt("Enter a number to count down from (max 10): "));
if (isNaN(num) || num < 1 || num > 10) {
    console.log("Invalid input. Please enter a number between 1 and 10.");
} else {
    for (let i = num; i >= 1; i--) {
        console.log(i);
    }
}