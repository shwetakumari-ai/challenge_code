//Check voting eligibility for a given age (18+). 


const prompt = require("prompt-sync")();
let age = Number(prompt("Enter your age: "));
if (age > 0 && age < 150) {
    if (age >= 18) {
        console.log("You are eligible to vote.");
    } else {
        console.log("You are not eligible to vote.");
    }
} 
else {
    console.log("Invalid age input.  enter a value between 0 and 150.");
}