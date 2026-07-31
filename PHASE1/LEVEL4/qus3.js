//Take three numbers and print the median value (neither maximum nor minimum).The median is the "middle" value when sorted. Approach: find the max and min of the three numbers. The median is the one that is neither max nor min. Calculate: sum - max - min = median. Or 
const prompt = require("prompt-sync")();
let a = parseFloat(prompt("Enter first number: "));
let b = parseFloat(prompt("Enter second number: "));
let c = parseFloat(prompt("Enter third number: "));
if (isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log("Invalid input. Please enter valid numbers.");
}
else {
    let max = Math.max(a, b, c);
    let min = Math.min(a, b, c);
    let sum = a + b + c;
    let median = sum - max - min;
    console.log("The median is: " + median);
}