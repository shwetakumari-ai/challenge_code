//Print all even numbers between 1 and 10.
const prompt = require("prompt-sync")();
let num = parseInt(prompt("Enter a number to print even numbers up to (max 10): "));
if (isNaN(num) || num < 1 || num > 10) {
    console.log("Invalid input. Please enter a number between 1 and 10.");
}
else {
    for (let i = 2; i <= num; i+=2) {
        console.log(i);
    }
}

/*else {
    for (let i = 1; i <= num; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
} */