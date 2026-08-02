const prompt = require("prompt-sync")();
let a = parseFloat(prompt("Enter the first number: "));
let b = parseFloat(prompt("Enter the second number: "));
let c = parseFloat(prompt("Enter the third number: "));
function isPythagoreanTriplet(a, b, c) {
  if (a >= b && a >= c) {
    console.log(`${b ** 2 + c ** 2} === ${a ** 2}`);
    return (b ** 2 + c ** 2) === (a ** 2);
  }
   else if (b >= a && b >= c) {
    console.log(`${a ** 2 + c ** 2} === ${b ** 2}`);
    return (a ** 2 + c ** 2) === (b ** 2);
  } else {
    console.log(`${a ** 2 + b ** 2} === ${c ** 2}`);
    return (a ** 2 + b ** 2) === (c ** 2);
  }
}
if (isPythagoreanTriplet(a, b, c)) {
  console.log("The numbers form a Pythagorean triplet.");
}   
else {
  console.log("The numbers do not form a Pythagorean triplet.");
}

// Test cases

