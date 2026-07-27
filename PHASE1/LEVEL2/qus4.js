// Check if one of two given numbers is a multiple of the other.
const prompt = require("prompt-sync")();
let num1 = Number(prompt("Enter the 1st number: "));
let num2 = Number(prompt("Enter the 2nd number: "));
if(num1 >0 && num2 > 0){
    if(num1 % num2 === 0 || num2 % num1 === 0){
    console.log("num1 is multiple of num2.")
}
    else{
    console.log("num1 is not multiple of num2.")
}
}
else{
    console.log("enter valid number.")
}

