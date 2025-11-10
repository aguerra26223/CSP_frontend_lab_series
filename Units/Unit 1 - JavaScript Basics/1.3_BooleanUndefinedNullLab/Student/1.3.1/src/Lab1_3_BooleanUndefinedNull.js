
 /* Lab 003 – Data Types in JavaScript (Boolean, Undefined, Null & Immutability)*/

// TODO 1: Booleans
let isStudent = true;
let hasLicense = false;

console.log("true || false:", true || false);   
console.log("true && false:", true && false);   
console.log("!true:", !true);                  e

// TODO 2: Short-circuit evaluation
console.log("false && (5 > 2):", false && (5 > 2));
console.log("true || (2 > 5):", true || (2 > 5));   

// TODO 3: Undefined
let grade;
console.log("grade:", grade); 

// TODO 4: Null
let Miami = null;
console.log("Miami (initial):", Miami); 

city = "Miami";
console.log("city (reassigned):", city); 

// TODO 5: Immutability
let word = "hello";
word[0] = "H"; // Strings are immutable — this will do nothing
console.log("word after attempt to change first letter:", word);

word = "Hello"; // Reassigning creates a new string
console.log("word after reassignment:", word);

