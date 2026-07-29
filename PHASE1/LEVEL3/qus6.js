// heck if an amount can be evenly divided into 2000, 500, and 100 currency notes.Check if the amount is divisible by the GCD of the denominations. Since GCD(2000, 500, 100) = 100, just check if amount % 100 == 0. But if the question means: can it be split into exactly these three denominations covering the total — then use a greedy approach: how many 2000s fit, then how many 500s in the remainder, then check if the remainder is divisible by 100.
const prompt = require("prompt-sync")();
let amount = prompt("Enter an amount: ");
if(isNaN(amount)) {
    console.log("Invalid input. Enter a numeric amount.");
}
else {
    amount = parseInt(amount);
}
// INCOMPLETE CODE
