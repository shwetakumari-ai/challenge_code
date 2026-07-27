//Check if a number is even or odd.
const prompt = require("prompt-sync")();
let num = Number(prompt("enter a number : "));
if (num % 2 === 0){
    conole.log("this no. is even");
}
else{
    console.log("this no. is odd");
}