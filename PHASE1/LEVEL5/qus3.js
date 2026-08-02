// Take day and month and check if it forms a valid calendar date (ignoring leap years).First validate month (1-12). Then based on the month, check if the day is within valid range. Months have 28, 30, or 31 days. February (month 2) = 28 days. Months 4,6,9,11 = 30 days. Rest = 31 days. This is nested validation — outer check on month, inner check on day based on the month's max days.
const prompt = require("prompt-sync")();
let day = parseInt(prompt("Enter the day (1-31): "));
let month = parseInt(prompt("Enter the month (1-12): "));
if (month < 1 || month > 12) {
    console.log("Invalid month. Please enter a value between 1 and 12.");
}
else {
    let maxDays;
    if (month === 2 ) {
        maxDays = 28;
    }
    else if (month === 4 || month === 6 || month === 9 || month === 11) {
        maxDays = 30;
    }
    else {
        maxDays = 31;
    }
    if (day < 1 || day > maxDays) {
        console.log(`Invalid day for month ${month}. Please enter a value between 1 and ${maxDays}.`);
    }
    else {
        console.log(`The date ${day}/${month} is valid.`);
    }
}