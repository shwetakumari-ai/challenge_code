//Take a 3-digit number and determine if the middle digit is the largest, smallest, or neither.Extract all three digits (same as Q1). The middle digit is (num / 10) % 10. Compare it with the other two: if middle > both others → largest. If middle < both others → smallest. Otherwise → neither.

const prompt = require("prompt-sync")();
let num = prompt("Enter a 3-digit number: ");   
if(num.length !== 3 || isNaN(num)) {
    console.log("Invalid input. Enter a 3-digit number.");
}
else {
    let units = num %10;
    let tens = Math.floor((num / 10) % 10);
    let hundreds = Math.floor(num / 100);
    if(tens > units && tens > hundreds) {
        console.log("The middle digit is the largest.");
    }
    else if(tens < units && tens < hundreds) {
        console.log("The middle digit is the smallest.");
    }
    else {
        console.log("The middle digit is neither the largest nor the smallest.");
    }
    if(units !== tens && tens !== hundreds && units !== hundreds) {
        console.log("All digits are distinct.");
    }
    else {
        console.log("Digits are not distinct.");
    }
}