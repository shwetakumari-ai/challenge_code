// print the sum of first n natural numbers
const prompt = require("prompt-sync")();
let num = parseInt(prompt("Enter a number to calculate the sum of first n natural numbers: "));
if(isNaN(num) ||num <1) {
    console.log("invalid input. please enter a positive number.");
}
else {
    let sum = 0;
    for( let i =1; i <=num; i++){
        sum += i;
    }
    console.log(`the sum of first ${num} natural numbers is: ${sum}`);
}