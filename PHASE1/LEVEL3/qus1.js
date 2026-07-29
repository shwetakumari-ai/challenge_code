// Take a 3-digit number and check if all digits are distinct. Extract all three digits: units = num % 10, tens = (num / 10) % 10, hundreds = num / 100. Then check if all three are different: d1 != d2 AND d2 != d3 AND d1 != d3. The digit extraction formula using % and / is the key skill here. You need ALL THREE pair comparisons — missing one pair is a common mistake.
const prompt = require("prompt-sync")();
let num = prompt("Enter a 3-digit number: ");
if(num.length !== 3 || isNaN(num)) {
    console.log("Invalid input. Enter a 3-digit number.");
}
else {
    let units = num % 10;
    let tens = Math.floor((num / 10) % 10);
    let hundreds = Math.floor(num / 100);
    if(units !== tens && tens !== hundreds && units !== hundreds) {
        console.log("All digits are distinct.");
    }
    else {
        console.log("Digits are not distinct.");
    }
}