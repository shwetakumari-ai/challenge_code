//print the sum of all even numbers between upto n.
const prompt = require("prompt-sync")();
let num = parseInt(prompt("Enter a number to calculate the sum of all even numbers up to n: "));
if(isNaN(num) || num < 2) {
    console.log("invalid input. please enter a number greater than or equal to 2.");
}
else {
    let sum = 0;
    let expression ="";
    console.log("the all even numbers are : " );
    for (let i =2; i <= num; i+=2) {
        console.log(i);
        sum +=i;
        expression += i;
        if (i <num){
            expression += " + ";
        }
    }
   
    console.log(`the sum of all even numbers up to ${num} is: ${expression} = ${sum}`);
} 