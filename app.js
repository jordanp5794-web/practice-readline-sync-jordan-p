const readlineSync = require('readline-sync');

let userInput = readlineSync.question("Enter a word or phrase: ");
let indexNumber = readlineSync.questionInt("Enter an index number: ");

let character = userInput[indexNumber];

console.log("The character at index " + indexNumber + " is: " + character);