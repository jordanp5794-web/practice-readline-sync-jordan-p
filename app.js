const input = require('readline-sync');
let name = input.question("What is your name? ");

console.log("Hello " + name + "! Lets get to know you.");

let q1 = input.question("1. What is your favorite food? ");
let q2 = input.question("2. What is your favorite color? ");
let q3 = Number(input.question("3. What is 5 + 7? "));
let q4 = input.question("4. What is your job title'? ");
let q5 = input.question("5. What is your favorite movie? ");

console.log("\nThanks for answering:");
console.log("1:", q1);
console.log("2:", q2);
console.log("3:", q3);
console.log("4:", q4);
console.log("5:", q5);