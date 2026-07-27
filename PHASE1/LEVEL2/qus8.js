//Take an alphabet character and check if it lies between 'a' and 'm' or 'n' and 'z'.
const prompt = require("prompt-sync")();
let char = (prompt("enter an alphabet character : ")).toLowerCase();
if (char >= 'a' && char <= 'm') {
    console.log("this character lies between 'a' and 'm'");
}
else if (char >= 'n' && char <= 'z') {
    console.log("this character lies between 'n' and 'z'");
}
else {
    console.log("this is not a valid alphabet character");
}