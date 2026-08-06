//check if a number is an armstrong number.
const prompt = require("prompt-sync")();
let num = parseFloat(prompt("enter number: "));
if(isNaN(num)){
    console.log("invalid input. enter number.");
}
else {
    sum = 0;
    let originalnum = num;
    while(num >0){
        lastdigit = num % 10;
        newlastdigit = lastdigit*lastdigit;
        num = Math.floor(num / 10);
        sum += newlastdigit;
    }
console.log("sum of each digit is : ", sum);    

}