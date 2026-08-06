// Print the reverse of a given number.Build the reversed number digit by digit. Start with reversed = 0. Extract the last digit (num % 10). Before adding, multiply reversed by 10 (shifts existing digits left). Then add the digit. Then remove last digit from original (num / 10). The key insight: "multiply-then-add" builds a number, while "mod-then-divide" tears it apart. These are inverse operations.
const prompt = require("prompt-sync")();
let num = parseInt(prompt("Enter a number to reverse: "));
if (isNaN(num)) {
  console.log("invalid input.enter number.");  
}
else {
    let reversed = 0; 
    let originalnum = num;
    while(num > 0){
       lastdigit = num % 10 ; 
       reversed = reversed * 10 + lastdigit;
       num =Math.floor(num/10);

    }
    console.log("Reversed number:", reversed);
}