// take character and check whether it is vowel or consonant , another number ask to user to enter alphabet.
const prompt = require("prompt-sync")();    
let char = (prompt("enter a character : ")).toLowerCase();
if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    console.log("this character is a vowel");
}
else if (char >= 'a' && char <= 'z') {
    console.log("this character is a consonant");
}
else {
    console.log("please enter an alphabet");
}