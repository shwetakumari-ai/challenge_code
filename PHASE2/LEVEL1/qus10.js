const prompt = require("prompt-sync")();
let num = parseInt(prompt("enter ano. to print product of digits of given no.: "));
if (isNaN(num) || num < 0) {
    console.log("invalid input. please enter a positive number.");
}
else {
    let product =1;
    let originalNum = num; // Store the original number for final output
    while (num > 0) {
    let lastDigit = (num % 10);
    product *= lastDigit;
    num = Math.floor(num / 10);

}
console.log(`the product of digits of ${originalNum} is: ${product}`);
}