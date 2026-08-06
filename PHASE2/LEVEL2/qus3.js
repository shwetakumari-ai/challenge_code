// check if a number is a palindrome.
const prompt = require("prompt-sync")();
let num = parseInt(prompt("enter number to check palindrome: "));
if(isNaN(num)){
    console.log("invalid input. enter number.");
}
else{
    let reversed = 0;
    let originalnum = num;
    while( num >0){
        lastdigit = num % 10 ;
        reversed = reversed*10 + lastdigit;
        num = Math.floor(num/10);
        }
        console.log("Reversed number is : ", reversed);
        if (reversed === originalnum){
            console.log("the given number is palindrome.");
        }
        else {
            console.log("it is not palindrome.");

        }    
 }
