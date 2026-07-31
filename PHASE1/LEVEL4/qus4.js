//Take 24-hour time (hours and minutes) and print whether it is AM or PM.Simple: if hours < 12 → AM, if hours >= 12 → PM. Special cases: 0 hours = 12:00 AM (midnight), 12 hours = 12:00 PM (noon). Validate that hours are 0-23 and minutes are 0-59. This is a direct range classification problem.
const prompt = require("prompt-sync")();
let hours = parseInt(prompt("Enter hours (0-23): "));
let minutes = parseInt(prompt("Enter minutes (0-59): "));
if (isNaN(hours) || isNaN(minutes) || hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
    console.log("Invalid input. Please enter valid hours (0-23) and minutes (0-59).");
}
else {
    let period = (hours < 12) ? "AM" : "PM";
    let displayHours = (hours % 12 === 0) ? 12 : hours % 12;
    console.log(`The time is: ${displayHours}:${minutes.toString().padStart(2, '0')} ${period}`); //padstart is used to add leading zeros to minutes if needed (target length, pad character). For example, 5 minutes will be displayed as 05.
}
