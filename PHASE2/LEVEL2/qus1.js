// Count the number of digits in a given number.
const prompt = require("prompt-sync")();
let num = parseInt(prompt("enter the digit : "));
if(isNaN(num)) {
    console.log("invalid input. please enter number.");
}
else if(num === 0)
{
    console.log("the number of digits in 0 is: 1");
}    else {
    let count = 0;
    let originalnum = num;
    while(num > 0){
        num =Math.floor(num/10);
        count++;


    }
    console.log(`the number of digits in ${originalnum} is: ${count}`);
}