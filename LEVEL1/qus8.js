//Take a temperature value and print "Cold", "Warm", or "Hot" using range conditions.
const prompt = require('prompt-sync')();
let num = Number(prompt("enter a temperature value : "));
if(num < 15){
    console.log("Cold");
}
else if(num >= 15 && num <= 30){
    console.log("Warm");
}
else{
    console.log("Hot");
}