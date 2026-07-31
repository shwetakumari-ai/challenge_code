// Take a number and print "Fizz" if divisible by 3, "Buzz" if divisible by 5, and "FizzBuzz" if divisible by both.The ORDER of checks is critical! Check "divisible by both" FIRST (15), then by 3, then by 5, then the number itself. If you check 3 first, a number divisible by both 3 and 5 will match the "divisible by 3" case and never reach the "both" case. This is the classic FizzBuzz problem — the most famous interview warm-up question.

const prompt = require("prompt-sync")();
let num = parseInt(prompt("Enter a number: "));
if (isNaN(num)) {
    console.log("Invalid input. Please enter a valid number.");
}
else {
    if (num % 15 === 0) {
        console.log("FizzBuzz");
    }
    else if (num % 3 === 0) {
        console.log("Fizz");
    }
    else if (num % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(num);
    }
}
