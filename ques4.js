//Check if a number is divisible by both 3 and 5.
const prompt = require("prompt-sync")();

let num = Number(prompt("enter a number : "));
if (num % 3 === 0 && num % 5 === 0){
    console.log("this no. is divisible by both 3 and 5");
}
else{
    console.log("this no. is not divisible by both 3 and 5");
}