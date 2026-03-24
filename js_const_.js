// log message on the console to check if it is working,
//  logging the message in the browser's developer tools console.
console.log('Hello World');

let name = 'John'; // String Literal
let age = 25; // Number Literal
let isApproved = true; // Boolean Literal
let firstName = undefined; // Undefined Literal
let lastName = null; // Null Literal
// Variable names:
// Cannot be a reserved keyword
// Should be short and meaningful
// Cannot start with a number
// Cannot contain a space or hyphen (_)
// Are case sensitive

let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

const myVariable = 'This is my text';
console.log(myVariable);
const myNumber = 512;
const myBoolean = true;

let person = {
	name: 'John',
	age: 30,
};

console.log(person);

const fruits = ['Apple', 'Pear', 'Mango', 'Melon', 'Orange'];
const myNumbers = [1, 2, 3, 4, 5, 6];
console.log(fruits[2]);
console.log(myNumbers.length);
myNumbers.push(7);

// Rewritten portion
const userData = {
	userName: 'Killer998',
	userAge: 12,
	favoriteGames: ['Fortnite', 'Roblox'],
};

const myConst = 'Hei';
let myLet = 'Hei';
console.log(myLet);
myLet = 'New Inhold';
console.log(myLet);

// Operations : +, -, *, /,

console.log(2 + 2);
const x = 5;
const y = 7;
const myAddition = x + y;
console.log(myAddition);

// Shorthand operators

let lives = 3;

lives = lives - 1; // lives -= 1

lives -= 1; // lives = lives -1

lives--; // Decrement by one

let lives2 = 3;

lives2 = lives2 + 1; // lives += 1

lives2 += 1; // lives = lives +1

lives2++; // Increment by one
console.log(lives2);

// Live undervisning !!!
// Dette er en kommentar (ctrl+*)

//multiline comment: (shift+alt+a)
/* console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
 */

//console.log("Hello World")

// Variables
// var
const myVariable = 'This is my text.'; // string (text)
console.log(myVariable);
const myNumber = 512.132; // float (desimaltall) - Note: JavaScript does not have a specific type for floats, but it can handle decimal numbers.
//const myBoolean =
let darkModeToggle = true; // Boolean Literal
//const dmt = false -> aldri bruk forkortelser i variabelnavn. (Never use abbreviations in variable names.)

// Python, snake case, my_variable, my_great_variable
// Pascal, pascal case, MyVariable
// Javascript, camel case, myVariable, myGreatVariable

const myNull = null; // don't worry about it.

const fruits2 = ['Apple', 'Pear', 'Mango', 'Cherry', 'Melon', 'Kiwi'];
const myNumbers2 = [1, 2, 3, 4, 5, 6];
console.log(fruits2[2]);

// Objects - key/value pairs

const userData2 = {
	userName: 'killer971',
	userAge: 13,
	favoriteGames: ['Fortnite', 'Roblox'],
};

// let vs. const

const myConst2 = 'Hei';
//myConst2 = "Noe annet";
let myLet2 = 'Hei';
console.log(myLet2);
myLet2 = 'Nytt innhold';
console.log(myLet2);

// Operators : + , - , / , *

console.log(2 + 2);
const x2 = 5;
const y2 = 7;
const myAddition2 = x2 + y2;
console.log(myAddition2);

// Shorthand operators

let lives3 = 3;

lives3 = lives3 - 1;
lives3 -= 1;
lives3--; // decrement med 1

lives3 = lives3 + 1;
lives3 += 1;
lives3++; // increment med 1
console.log(lives3);
