// Take three sides and check if they form a valid triangle. Triangle inequality theorem
const prompt = require("prompt-sync")();
let a = Number(prompt("enter 1st side : "));
let b = Number(prompt("enter 2nd side : "));
let c = Number(prompt("enter 3rd side : "));

if(a>0 && b>0 && c>0 && a+b>c && a+c>b && b+c>a){
    console.log("the sides form a valid triangle");

    if(a===b && b===c){
        console.log("the triangle is equilateral");
    }
    else if(a===b || b===c || a===c){
        console.log("the triangle is isosceles");
    }
    else{
        console.log("the triangle is scalene");
    }
}
else{
    console.log("the sides do not form a valid triangle");
}
//If the sides form a valid triangle, determine whether it is equilateral, isosceles, or scalene. First validate the triangle (Q1 logic). 

