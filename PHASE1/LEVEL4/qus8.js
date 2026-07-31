//Take a weekday number (1–7) and determine if it is a weekday or weekend. Map 1-5 to weekdays, 6-7 to weekends (or whichever convention you choose). Use OR logic: if day == 6 || day == 7 → weekend, else → weekday. Or check the range: day >= 1 && day <= 5 → weekday. Simple classification with predefined categories.
const prompt = require("prompt-sync")();
let day = parseInt(prompt("Enter a number (1-7) representing the day of the week: "));  
if (isNaN(day) || day < 1 || day > 7) {
    console.log("Invalid input. Please enter a number between 1 and 7.");
}
else {
    if (day >= 1 && day <= 5) {
        console.log("It's a weekday.");
    }
    else {
        console.log("It's a weekend.");
    }
}
