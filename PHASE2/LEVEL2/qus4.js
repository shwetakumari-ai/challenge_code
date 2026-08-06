//
const prompt = require("prompt-sync")();
let num = parseInt(prompt("enter number: "));
if(isNaN(num)){
    console.log("invalid input. enter number.");
}
else{
    sum = 0;
    let originalnum = num;
    while(num > 0){
        lastdigit =num %10;
        sum += lastdigit;
        num = Math.floor(num/10);
       
        

    }
    console.log("sum of digits of the given number is : ", sum);    
}