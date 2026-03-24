// This is a comment 'if' contained in a file with .js extension.

console.log('Hei'); // Print 'Hei' to the console

const myVariable = 'Text'; // Declare and initialize a variable with string value
let myLet = 1; // Declare and initialize a variable with integer value
mylet = 0; // Assign an integer value to the previously declared variable (note: this is not camelCase)

// Let's use camelCase for variables from now on
let mySum = 5 + 5; // Initialize a variable with an arithmetic expression result
mySum = mySum + 2; // Reassign the value of the variable using addition
mySum += 2; // Use the augmented assignment operator to add 2 to the variable's value
mySum++; // Increment the variable's value by 1

// Comparison operations
console.log(4 < 3); // Print true to the console (since 4 is greater than 3)
console.log(4 > 3); // Print false to the console (since 4 is not less than 3)

// Don't use loose equality checks!
console.log(5 == '5'); // This will print true, but it's not what we want
console.log(5 === '5'); // Use strict equality instead!

// And don't use loose inequality checks either!
console.log(5 != '5'); // This will print false, which is correct
console.log(5 !== '5'); // But this will also print true, which is not what we want

// Conitionals

const temperatur = 22;

if (temperatur >= 20) {
	/**
	 * If the temperature is greater than or equal to 20,
	 * check if a certain condition is met.
	 */
	if (true) {
		console.log("It's a warm day!");
	} else {
		/**
		 * If the condition is not met, print an alternative message
		 */
		console.log("It's not that warm...");
	}
}
// Logical operations. Logical AND

const age = 18; // Variable declaration with initial value
const hasLicence = false; // Variable declaration with boolean value
const isCool = true; // Variable declaration with boolean value

if (age >= 18 && hasLicence) {
	// Use logical AND to check multiple conditions
	/**
	 * Check if the user's age is greater than or equal to 18 and they have a license.
	 */
	console.log('You are allowed to drive'); // Print success message if condition met
} else {
	/**
	 * If either of the conditions is not met, print an error message
	 */
	console.log('You cannot drive'); // Print error message if condition not met
}

// Ternary operator

const isMember = false; // Variable declaration with boolean value

let fee;

if (isMember) {
	fee = '50,-'; // Assign a value to the variable based on the condition
} else {
	fee = '100,-'; // Assign an alternative value if the condition is not met
}
console.log(fee); // Print the assigned value

// What's wrong with this code? It seems like we're duplicating logic and variables. If `isMember` changes, we'd have to update both places.

// Switch statement with comments for clarity

/**
 * Use a switch statement to handle different cases based on the 'fruit' variable.
 */
const fruit = 'banana';

switch (fruit) {
	/**
	 * Check if the 'fruit' is an apple. If so, log a message about apples.
	 */
	case 'apple':
		console.log('Apple are often red');
		break; // Break out of the switch block after this case
	case 'banana':
		/**
		 * If the 'fruit' is not an apple but a banana, log a message about bananas.
		 */
		console.log('Banana are yellow');
		break; // Break out of the switch block after this case
	default:
		/**
		 * If none of the above cases match, log a default message.
		 */
		console.log('No fruit information available.');
}

// Truthy / falsy values

const isTrue = true;
const isFalse = false;

const firstName = 'Dorian';

// Check if a value is truthy or falsy. If it's not empty, print a message.
if (firstName) {
	/**
	 * Use the truthiness of the variable to determine which message to log.
	 */
	console.log('Dorian is truthy');
} else {
	/**
	 * If the variable is falsy, log an error message.
	 */
	console.log('The name is wrong');
}

// Template literals

console.log(`Hei ${firstName}, how are you?`); // Use template literal to concatenate strings
