//Check if a number is a multiple of 7 or ends with 7.
const prompt = require("prompt-sync")();
let num = prompt("Enter a number: ");
if(isNaN(num)) {
    console.log("Invalid input. Enter a number.");
}
else {
    if(num % 7 === 0 || num % 10 === 7) {
        console.log("The number is a multiple of 7 or ends with 7.");
    }
    else {
        console.log("The number is neither a multiple of 7 nor ends with 7.");
    }
}