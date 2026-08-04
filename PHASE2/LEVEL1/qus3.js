//Print all odd numbers between 1 and 100. 
const prompt = require("prompt-sync")();
let num = parseInt(prompt("enter no. to print all odd no. between 1 and 100: "));
if (isNaN(num) || num <1 || num >100){
    console.log("invaid input. please enter no. between 1 and 100.")
}
else {
    for (let i = 1; i <=num; i +=2){
        console.log(i);
     }
}