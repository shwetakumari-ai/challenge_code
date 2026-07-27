//Take a number and print whether it's positive, negative, or zero.

const prompt = require("prompt-sync")();
let num = Number(prompt("enter a number : "));
if (num > 0){
    console.log("this no. is positive");
}
else if(num < 0){
    console.log("this no. is negative");
}
else{
    console.log("this no. is zero");
}
