/* 
 Lab 002 – Data Types in JavaScript
*/

// TODO 1: Create variables age (34) and price (12.99), print both
// TODO 1b: Divide "Sandra" by 2 and print result (expect NaN)

let age = 34;
let price = 12.99;

console.log(`age:${age}`)
console.log("price:"+ price);


// TODO 2: Print basic math ops: + - * /
// TODO 2b: Use exponentiation (2 ** 3) and modulo (7 % 2)

console.log("5 + 3 =", 5 + 3);
console.log("10 - 4 =", 10 - 4);
console.log("6 * 7 =", 6 * 7);
console.log("20 / 5 =", 20 / 5);

console.log("2 ** 3 =", 2 ** 3);
console.log("7 % 2 =", 7 % 2); 


// TODO 3: Assignment operators with score variable

let score = 10;
score += 5;  
console.log("After + = 5, score =", score);
score -= 3;  
console.log("After - = 3, score =", score);
score *= 2;  
console.log("After * = 2, score =", score);
score /= 4;  
console.log("After /= 4, score =", score);

// TODO 4: Expressions with operator precedence

let result = 2 + 3 * 4; 
console.log("2 + 3 * 4 =", result);
let result2 = (2 + 3) * 4; 
console.log("(2 + 3) * 4 =", result2);

// TODO 5: Strings (single, double, backticks)

let singleQuote = 'Hello';
let doubleQuote = "World";
let backtick = `!`;

// TODO 6: String properties and methods
// - greeting.length
let greeting = "Hello, I'm feeling sad today";

// Length of the string
console.log("Length of greeting:", greeting.length);

// Access characters
console.log("charAt(0):", greeting.charAt(0));
console.log("charAt(5):", greeting.charAt(5));
console.log("[3]:", greeting[3]);

// indexOf
console.log("Index of 'sad':", greeting.indexOf("sad"));

// repeat
console.log("Repeat 3 times:", "Ha! ".repeat(3));

// substring, substr, slice examples
console.log("substring(0,5):", greeting.substring(0, 5));
console.log("substr(7,5):", greeting.substr(7, 5));
console.log("slice(7,12):", greeting.slice(7, 12));

// 🚀 Stretch Goals
// - Even number check using %
// - localeCompare() example
