const prompt = require("prompt-sync")();
let num = parseInt(prompt("enter no. to print all odd no. upto n: "));
if(isNaN(num) || num < 1) {
    console.log("invalid input. please enter a psoitive number.");

}
else {
    let sum = 0;
    console.log(`the odd numbers upto ${num} are: `);
    for (let i = 1; i <=num; i+=2) {
        console.log(i);
        sum +=i;
    }
    console.log(`the sum of all odd numbers upto ${num} is: ${sum}`);
}