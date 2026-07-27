// Take three sides and check if they form a valid triangle. Triangle inequality theorem
const prompt = require("prompt-sync")();
let a = Number(prompt("enter 1st side : "));
let b = Number(prompt("enter 2nd side : "));
let c = Number(prompt("enter 3rd side : "));

if(a>0 && b>0 && c>0 && a+b>c && a+c>b && b+c>a){
    console.log("the sides form a valid triangle");
}
else{
    console.log("the sides do not form a valid triangle");
}