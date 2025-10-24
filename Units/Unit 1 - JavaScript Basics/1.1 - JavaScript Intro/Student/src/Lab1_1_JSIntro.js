/* ===========================================================
   Lab 1.1 – Intro
   Exploring JavaScript syntax, console output, and variables.
   =========================================================== */

// TODO 1: Print your full name with console.log()

console.log("Aiden Guerra");

// TODO 2: Declare variable favoriteFood, assign "Steak", then reassign "Pizza"

let favoriteFood = "Steak";
console.log(favoriteFood)
favoriteFood = "Pizza"
console.log(favoriteFood)

// TODO 3: Create variable mystery, assign a string, then a number, print type each time
let mystery = "Hello";
console.log("Value: " + mystery + " Data type; " + typeof mystery);
mystery = 67;
console.log("Value: " + mystery + " Data type; " + typeof mystery);


// TODO 4: Declare const schoolName, try to reassign
const schoolName = "Christopher Columbus High School";
console.log("School name:", schoolName);

// TODO 5: Create three valid camelCase variables and print them
let birthYear = "2008"
let carType = 'BMW'
let favoriteCity = "Miami"

console.log(birthYear);
console.log(carType);
console.log(favoriteCity);



// 🚀 Stretch Goals (optional)
// - Create a variable age and print "I am X years old" using concatenation
// - Repeat using template literals
let age = 17;
console.log(`I am ${age} years old`);


/* ===========================================================
   🎟 EXIT TICKET
   1. What new concept or skill did you learn in this lab?
   2. What challenges did you encounter, and how did you solve them?
   3. Where else could this programming concept be useful?
   =========================================================== */

let a = "7";
let b = "3";

console.log(Number(a) + Number(b));


let width = 5;
let height = 10;

let area = width * gvyheight;
let perimeter = 2 * (width + height);

console.log("Area:", area);
console.log("Perimeter:", perimeter);

console.log(`A rectangle with width ${width} and height ${height} has an area of ${area} and a perimeter of ${perimeter}.`);
