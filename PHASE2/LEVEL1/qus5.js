//Print the table of a given number (n × 1 to n × 10).
const prompt = require("prompt-sync")();
let num = parseInt(prompt("Enter a number to print its multiplication table: "));
if (isNaN(num) || num < 1 ) {
    console.log("Invalid input. Please enter a number .");
}
else {
    for (let i = 1; i <= 10; i++) {
        let result = num * i;
        console.log(`${num} × ${i} = ${result}`);
    }
}