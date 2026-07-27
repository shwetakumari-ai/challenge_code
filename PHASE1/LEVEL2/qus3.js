//Take marks (0–100) and print the corresponding grade (A/B/C/D/F).
const prompt = require("prompt-sync")();
let marks = Number(prompt("enter marks (0-100) : "));
if(marks >= 90 && marks <= 100){
    console.log("Grade A");
}
else if(marks >= 80 && marks < 90){
    console.log("Grade B");
}
else if(marks >= 70 && marks < 80){
    console.log("Grade C");
}
else if(marks >= 60 && marks < 70){
    console.log("Grade D");
}
else if(marks >= 0 && marks < 60){
    console.log("Grade F");
}
else{
    console.log("Invalid input. Please enter a value within 0 and 100.");
}