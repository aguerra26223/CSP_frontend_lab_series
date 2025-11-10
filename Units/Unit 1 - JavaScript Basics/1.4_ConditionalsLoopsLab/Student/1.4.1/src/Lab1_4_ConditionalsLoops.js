/* 
 Lab 004 – Conditionals and Loops
*/

// TODO 1: if..else with age discounts
let age = 12; // Example age
if (age < 13) {
    console.log("Child discount applied!");
} else if (age >= 13 && age <= 19) {
    console.log("Teen discount applied!");
} else {
    console.log("No discount applied.");
}

// TODO 2: Nested if with two numbers
let num1 = 8;
let num2 = 12;

if (num1 > num2) {
    console.log(`${num1} is greater than ${num2}`);
} else {
    if (num1 < num2) {
        console.log(`${num1} is less than ${num2}`);
    } else {
        console.log(`${num1} and ${num2} are equal`);
    }
}

// TODO 3: Switch statement for language greeting
let language = "Spanish";

switch (language) {
    case "English":
        console.log("Hello!");
        break;
    case "Spanish":
        console.log("¡Hola!");
        break;
    case "French":
        console.log("Bonjour!");
        break;
    default:
        console.log("Language not supported.");
}

// TODO 4: While loop (1 to 10)
let counter = 1;
while (counter < 10) {
    console.log("counter:" + counter);
    counter++;
}




// TODO 5: Do..while loop (1 to 5)
let j = 1;
do {
    console.log(j);
    j++;
} while (j <= 5);

// TODO 6: For loop (1 to 20, print "ten" at 10 and "twenty" at 20)
for (let k = 1; k <= 20; k++) {
    if (k === 10) {
        console.log("ten");
    } else if (k === 20) {
        console.log("twenty");
    } else {
        console.log(k);
    }
}

// TODO 7: Even/Odd loop (1 to 20)
for (let m = 1; m <= 20; m++) {
    if (m % 2 === 0) {
        console.log(`${m} is even`);
    } else {
        console.log(`${m} is odd`);
    }
}

// 🚀 Stretch Goals
// Backwards loop from 20 to 1
for (let n = 20; n >= 1; n--) {
    console.log(n);
}

// Skip multiples of 3 in even/odd loop
for (let p = 1; p <= 20; p++) {
    if (p % 3 === 0) continue; // Skip multiples of 3
    if (p % 2 === 0) {
        console.log(`${p} is even`);
    } else {
        console.log(`${p} is odd`);
    }
}
    