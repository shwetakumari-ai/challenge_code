const prompt = require("prompt-sync")();
let num = Number(prompt("enter a year : "));
if ((num % 4 === 0 && num % 100 !== 0) || (num % 400 === 0)) {
    console.log("this year is a leap year");1900
}
else{
    console.log("this year is not a leap year");
}