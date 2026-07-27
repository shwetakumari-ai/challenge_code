// check if a number is divisible by 5 or not. 
const prompt = require("prompt-sync")();
let num = Number(prompt("enter a number : "));
if (num % 5 === 0){
    console.log("this no. is divisible by 5");
}
else{
    console.log("this no. is not divisible by 5");
}