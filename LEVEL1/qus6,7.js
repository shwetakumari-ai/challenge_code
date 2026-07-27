
//Take two numbers and print the larger one.
const prompt = require("prompt-sync")();
let a= Number(prompt("enter 1st number : "));
let b = Number(prompt("enter 2nd number : "));
if(a>b){
    console.log("the larger number is : " + a);
}
else if(b>a){
    console.log("the larger number is : " + b);
}
else{
    console.log("both numbers are equal");
}

/*
// Take three numbers and print the largest.
const prompt = require("prompt-sync")();
let a = Number(prompt("enter 1st number : "));
let b = Number(prompt("enter 2nd number : "));
let c = Number(prompt("enter 3rd number : "));
if(a>b && a>c){
    console.log("the largest number is : " + a);
}
else if(b>a && b>c){
    console.log("the largest number is : " + b);
}
else{
    console.log("the largest number is : " + c);
}
*/
