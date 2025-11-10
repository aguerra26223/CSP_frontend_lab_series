/* ===========================================================
   Lab 1.2 – Data Types
   Primitive types, literals, typeof, and basic conversions.
   =========================================================== */

// TODO 1: Declare one variable for each primitive type discussed in the PDF.
// string, number, boolean, null, undefined
let s = "Hello, world!"; 
let n = 41;             
let b = true;            
let z = null;            
let u;                   

// TODO 2: Use typeof to log each variable's type.
console.log("typeof s:", typeof s); 
console.log("typeof n:", typeof n); 
console.log("typeof b:", typeof b); 
console.log("typeof z:", typeof z); 
console.log("typeof u:", typeof u);

// TODO 3: Show string concatenation vs numeric addition using "5" and 5.
console.log('"5" + 5 =', "5" + 5);
console.log('5 + 5 =', 5 + 5);     

// TODO 4: Explicit conversions using Number(), String(), Boolean()
console.log('Number("123") =', Number("123"));      
console.log('String(123) =', String(123));         
console.log('Boolean(0) =', Boolean(0));            
console.log('Boolean("hi") =', Boolean("hi"));      

// TODO 5: NaN and isNaN: demonstrate a case where conversion fails.
let badNumber = Number("hello"); 
console.log('Number("hello") =', badNumber);        
console.log('isNaN(badNumber) =', isNaN(badNumber)); 

// TODO 6: Template literals: print a line that mixes text + a variable value.
let name = "Aiden";
console.log(`Hi, ${name}! You are learning about ${typeof s} data types today.`);