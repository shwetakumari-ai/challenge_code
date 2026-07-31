//Take income and age, and check if eligible for tax (age > 18 and income > 5 L).Two conditions connected with AND (&&): age > 18 AND income > 500000 (5 Lakhs = 500,000). Both must be true for tax eligibility. This is a real-world example of compound condition checking. In India, actual tax slabs are more complex, but this teaches the fundamental AND logic.
const prompt = require("prompt-sync")();
let age = parseInt(prompt("Enter your age: "));
let income = parseFloat(prompt("Enter your annual income (in INR): "));
if(isNaN(age) || isNaN(income)) {
    console.log("Invalid input. Please enter valid numbers for age and income.");
}
else {
    if(age > 18 && income > 500000) {
        console.log("You are eligible for tax.");
    }
    else {
        console.log("You are not eligible for tax.");
    }
}