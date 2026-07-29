// Take a character and check if it is a letter, a digit, or neither.
const prompt = require("prompt-sync")();
let char = prompt("Enter a character: ");
if(char.length !== 1) {
    console.log("Invalid input. Enter a single character.");
}
else {
    if((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z')) {
        console.log("The character is a letter.");
    }
    else if (char >= '0' && char <= '9') {
        console.log("The character is a digit.");
    }
    else {
        console.log("The character is special character.");

    }
}