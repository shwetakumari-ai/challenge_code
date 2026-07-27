//Take the hour of the day (0–23) and print "Good Morning", "Good Afternoon", "Good Evening", or "Good Night".Divide the 24-hour clock into time slots (e.g., 5-11 = Morning, 12-16 = Afternoon, 17-20 = Evening, 21-4 = Night). Use chained if-else with range checks. The "Night" slot wraps around midnight (21-23 AND 0-4), so use OR logic for that range. This models real-world time-based decision making.

const prompt = require("prompt-sync")();
let hour = Number(prompt("enter the hour of the day (0-23) : "));
if (hour >= 5 && hour <= 11) {
    console.log("Good Morning");
}
else if (hour >= 12 && hour <= 16) {
    console.log("Good Afternoon");
}
else if (hour >= 17 && hour <= 20) {
    console.log("Good Evening");
}
else if ((hour >= 21 && hour <= 23) || (hour >= 0 && hour <= 4)) {
    console.log("Good Night");
}
else{
    console.log("Invalid hour input. Please enter a value between 0 and 23.");
}