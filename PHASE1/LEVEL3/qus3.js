//Take a 4-digit number and check if the first and last digits are equal.First digit of a 4-digit number: num / 1000. Last digit: num % 10. Compare them. The challenge here is knowing how to isolate the first digit — for an n-digit number, divide by 10^(n-1). Since we know it's 4 digits, dividing by 1000 gives the first digit directly.
const prompt = require("prompt-sync")();
let num = prompt("Enter a 4-digit number: ");
if(num.length !== 4 || isNaN(num)) {
    console.log("Invalid input. Enter a 4-digit number.");
}
else {
    let firstDigit = Math.floor(num / 1000);
    let lastDigit = num % 10;
    if(firstDigit === lastDigit) {
        console.log("The first and last digits are equal.");
    }
    else {
        console.log("The first and last digits are not equal.");
    }
}