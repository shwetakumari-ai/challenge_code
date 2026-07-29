// Take two angles of a triangle and compute the third angle.Sum of all angles in a triangle = 180°. So the third angle = 180 - angle1 - angle2. But first VALIDATE: both angles must be positive, and their sum must be less than 180 (otherwise no valid triangle exists). Also check that the computed third angle is positive. Always validate before computing.15
const prompt = require("prompt-sync")();
let angle1 = prompt("Enter the first angle of the triangle: ");
let angle2 = prompt("Enter the second angle of the triangle: ");
if(isNaN(angle1) || isNaN(angle2)) {
    console.log("Invalid input. Enter numeric angles.");
}
else {
    angle1 = parseFloat(angle1);
    angle2 = parseFloat(angle2);

    if(angle1 <= 0 || angle2 <= 0) {
        console.log("Invalid input. Angles must be positive.");
    }
    else if(angle1 + angle2 >= 180) {
        console.log("Invalid input. The sum of the two angles must be less than 180°.");
    }
    else {
        let angle3 = 180 - angle1 - angle2;
        console.log("The third angle of the triangle is: " + angle3 + "°");
    }
}