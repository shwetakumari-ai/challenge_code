//Take a day number (1–7) and print the corresponding day name.This is a direct mapping problem: 1→Monday, 2→Tuesday, etc. Use either a chain of if-else (7 checks) or a switch-case statement (more readable for exact value matching). Switch-case is designed exactly for this pattern. Don't forget the default case for invalid input.
const prompt = require("prompt-sync")();
let dayNum = Number(prompt("Enter a day number (1-7): "));
switch(dayNum) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday"); 
        break;
    case 3:
        console.log("Wednesday");               
        break;
    case 4:
        console.log("Thursday");
        break;  
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7: 
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day number. Please enter a number between 1 and 7.");            
    
    
}