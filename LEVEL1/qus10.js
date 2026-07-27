//Take a character and check whether it's uppercase, lowercase, a digit, or a special character.

const prompt = require("prompt-sync")();
let char = (prompt("enter a character : "));
if (char >= 'A' && char <= 'Z') {
    console.log("this character is uppercase");
}
else if (char >= 'a' && char <= 'z') {
    console.log("this character is lowercase");
}
else if (char >= '0' && char <= '9') {
    console.log("this character is a digit");
}
else {
    console.log("this character is a special character");
}