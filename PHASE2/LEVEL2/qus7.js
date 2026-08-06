//Print all prime numbers between 1 and 100.
const prompt = require("prompt-sync")();
let num = parseInt(prompt("enter number : "));
if(isNaN(num)){
    console.log("invalid input. enter number.");
}
else {
    for(let i = 2; i <= num; i++){
        let isPrime = true; 
        for(let j = 2; j <= Math.sqrt(i); j++){
            if(i % j === 0){
                isPrime = false;
                break;
            }
}
if(isPrime){
    console.log(i);
}   
}
}
