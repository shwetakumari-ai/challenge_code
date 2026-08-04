const prompt = require("prompt-sync")();
let num =parseInt(prompt("enter no. to print factorial of n: "));
if(isNaN(num) || num <0){
    console.log("invalid input. please enter a positive number.");

}
else{
    let factorial = 1;
    console.log(`the factorial of ${num} is: `);
    for (let i = 1; i <= num; i++) {
        console.log(i);
        factorial *= i;
    }
    console.log(`the factorial of ${num} is: ${factorial}`);
}