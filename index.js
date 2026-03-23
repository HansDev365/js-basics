// log message on the console to check if it is working,
//  logging the message in the browser's developer tools console.
console.log('Hello World');

let name = 'John'; // String Literal
let age = 25; // Number Literal
let isApproved = true; // Boolean Literal
let firstName = undefined; // Undefined Literal
let lastName = null; // Null Literal
let selectedColor = null; // Null Literal

// Varables names:
// Cannot be a reserved keyword
// Should be short and meaningful
// Cannot start with a number
// Cannot contain a space or hyphen (_)
// Are case sensitive

// let intrestRate = 0.3;
// intrestRate = 1;
// console.log('intrestRate')

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

const myConst = "Hei";
let myLet = "Hei";
console.log(myLet);
myLet = "New Inhold";
console.log(myLet);

// Operations : +, -, *, /, 

console.log(2+2);
const x = 5
const y = 7
const myAddition = x + y;
console.log(myAddition);

// Shorthand operators 

let lives = 3;

lives = lives -1; // lives -= 1
 
lives -= 1; // lives = lives -1

lives --; // Decrement by one

let lives = 3;

lives = lives +1; // lives += 1
 
lives += 1; // lives = lives +1

lives++; // Decrement by one
console.log(lives)