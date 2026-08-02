//Take three numbers and check if they can form a Pythagorean triplet.pythagorean triplet: a² + b² = c² where c is the largest. First find the largest of the three. Then check if the sum of squares of the other two equals the square of the largest. You don't know which input is the hypotenuse, so finding the max first is essential. Example: 3, 4, 5 → 9 + 16 = 25 ✓
const prompt = require("prompt-sync")();
let a = parseFloat(prompt("Enter the first number: "));
let b = parseFloat(prompt("Enter the second number: "));
let c = parseFloat(prompt("Enter the third number: "));
if (a >= b && a >= c) {
    if (b * b + c * c === a * a) {
        console.log("The numbers form a Pythagorean triplet.");
    }
    else {
        console.log("The numbers do not form a Pythagorean triplet.");
    }
}
else if (b >= a && b >= c) {
    if (a * a + c * c === b * b) {
        console.log("The numbers form a Pythagorean triplet.");
    }
    else {
        console.log("The numbers do not form a Pythagorean triplet.");
    }
}
else {
    if (a * a + b * b === c * c) {
        console.log("The numbers form a Pythagorean triplet.");
    }
    else {
        console.log("The numbers do not form a Pythagorean triplet.");
    }
}