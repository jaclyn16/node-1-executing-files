// 🧠 Your Task:
// 1. Write JavaScript code below that reverses the `inputString` using a for loop.
// 2. Store the reversed string in the variable called `reversedString`.
// 3. Use `console.log()` to print the value of `reversedString`.
// 4. Run this file in your terminal using: `node reverseString.js`

// ✅ If your code works, you should see the reversed string printed in the terminal.
// For example, reversing "Javascript Rocks!" should print:
// "!skcoR tpircSavaJ"

// -------------------------------------

const inputString = "Javascript Rocks!";
let reversedString = "";

// Your code here
for (let i = inputString.length - 1; i >= 0; i--) {
    reversedString += inputString[i];
}
console.log(reversedString);

// this loop is starting at the end of the string and moves backwards..
// adding each character to a new string to reverse it.

// the let i= inputString.length -1, tells how many characters in the string, so we 
// start at 1 to start at last letter/character.
// i>=0, means to keep going as long as dont past 1st letter. when i = -i loop stops
// i-- go backwards one step ea time.. we are counting down NOT up!
// the reversedString += inputString takes current letter and add to new string.