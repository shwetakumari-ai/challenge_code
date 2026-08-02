//Take time (hours and minutes) and print the smaller angle between the hour and minute hands.Use the clock angle formulas: Hour hand moves 0.5° per minute (360° / 12 hours / 60 min). Minute hand moves 6° per minute (360° / 60 min). Hour angle = (hours % 12) × 30 + minutes × 0.5. Minute angle = minutes × 6. The angle between them = |hour_angle - minute_angle|. If this is > 180, the smaller angle is 360 - this value. The "smaller angle" part is the tricky bit — always take the minimum of the angle and its complement.
const prompt = require("prompt-sync")();
let hours = parseInt(prompt("Enter the hours (0-23): "));
let minutes = parseInt(prompt("Enter the minutes (0-59): "));
if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
    console.log("Invalid time. Please enter hours (0-23) and minutes (0-59).");
}
else {
    let hour_angle = (hours % 12) * 30 + minutes * 0.5;
    let minute_angle = minutes * 6;
    let angle_between = Math.abs(hour_angle - minute_angle);
    let smaller_angle = Math.min(angle_between, 360 - angle_between);
    console.log(`The smaller angle between the hour and minute hands is: ${smaller_angle} degrees.`);
}
