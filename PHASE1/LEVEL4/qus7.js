//Take a single digit (0–9) and print its word form ("Zero" to "Nine").This is a perfect switch-case problem: 10 specific values mapping to 10 specific outputs. Each case (0 through 9) prints the corresponding word. Include a default case for invalid input. This is cleaner than using 10 if-else blocks. In some languages, you could use an array of strings indexed by the digit — that's the array-based approach.
const prompt = require("prompt-sync")();
let digit = parseInt(prompt("Enter a single digit (0-9): "));
if (isNaN(digit) || digit < 0 || digit > 9) {
    console.log("Invalid input. Please enter a single digit (0-9).");
}
else {
    switch (digit) {
        case 0:
            console.log("Zero");
            break;
        case 1:
            console.log("One");
            break;
        case 2:
            console.log("Two");
            break;
        case 3:
            console.log("Three");
            break;
        case 4:
            console.log("Four");
            break;
        case 5:
            console.log("Five");
            break;
        case 6:
            console.log("Six");
            break;
        case 7:
            console.log("Seven");
            break;
        case 8:
            console.log("Eight");
            break;
        case 9:
            console.log("Nine");
            break;
        default:
            console.log("Invalid input. Please enter a single digit (0-9).");
    }
}