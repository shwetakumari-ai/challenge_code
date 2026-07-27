//Take two numbers and determine whether both are even, both are odd, or one is even and one is odd.

const prompt = require("prompt-sync")();
let a = Number(prompt("enter 1st number : "));
let b = Number(prompt("enter 2nd number : "));
if(a % 2 === 0 && b % 2 === 0){
    console.log("both numbers are even");
}
else if(a % 2 !== 0 && b % 2 !== 0){
    console.log("both numbers are odd");
}
else{
    console.log("one number is even and one number is odd");
}