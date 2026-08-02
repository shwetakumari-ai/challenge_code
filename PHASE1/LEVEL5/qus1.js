//Take coordinates (x, y) and check if the point lies on the X-axis, Y-axis, or at the origin.Origin: x == 0 AND y == 0. X-axis: y == 0 (but not origin). Y-axis: x == 0 (but not origin). Check origin FIRST (most specific), then axes. If neither, the point is in a quadrant. The key insight: check from most specific to most general to avoid overlapping conditions.
const prompt = require("prompt-sync")();
let x = parseFloat(prompt("Enter the x-coordinate: "));
let y = parseFloat(prompt("Enter the y-coordinate: "));
if (x === 0 && y === 0) {
    console.log("The point is at the origin.");
}
else if (y === 0) {
    console.log("The point is on the X-axis.");
}
else if (x === 0) {
    console.log("The point is on the Y-axis.");
}
else {
    console.log("The point is in a quadrant.");
}