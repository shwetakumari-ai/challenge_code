//Take a password string and check basic rules (length ≥ 8 and contains at least one digit).Two checks: (1) string length — in Java, use .length() method and check if >= 8. (2) Contains a digit — loop through each character and check if any is a digit (Character.isDigit()). Use a boolean flag that starts as false and becomes true when you find a digit. Both conditions must be met (AND logic). This is your first taste of iterating through a string for validation.
const prompt = require("prompt-sync")();
let password = prompt("Enter a password: ");
let hasDigit = false;
if (password.length < 8) {
    console.log("Password must be at least 8 characters long.");
}
else {
    for (let i = 0; i < password.length; i++) {
        if (Character.isDigit(password.charAt(i))) {
            hasDigit = true;
            break;
        }
    }
    if (!hasDigit) {
        console.log("Password must contain at least one digit.");
    }
    else {
        console.log("Password is valid.");
    }
}
//incomplete