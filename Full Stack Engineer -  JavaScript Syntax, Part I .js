Using the console log

console.log(30)
console.log(0)

// Opening line
console.log('It was love at first sight.');
consolel.log(/*IGNORED!*/)
console.log('The first time Yossarian saw the chaplain he fell madly in love with him.');
console.log('Yossarian was in the hospital with a pain in his liver that fell just short of being jaundice.');
console.log('The doctors were puzzled by the fact that it wasn\'t quite jaundice.');
console.log('If it became jaundice they could treat it.');
console.log('If it didn\'t become jaundice and went away they could discharge him.');
console.log('But this just being short of jaundice all the time confused them.');

console.log('JavaScript Location of Codeacademy headquarters: 575 Boradway, New York City');
console.log(2011);
console.log('Woohoo! I love to code! #codecademy');
console.log(20.49);

console.log(30 + 3.5); // plus
console.log(2021 - 1969); // subtract
console.log(65 / 240); // divide 
console.log(0.2708 * 100); // multiply

console.log('Hello' + 'World'); 
console.log('Hello' +' '+ 'World')

console.log('Teaching the world how to code'.length); //Prints 30

console.log('Codecademy'.toUpperCase()); // Use .toUpperCase() to log 'Codecademy' in all uppercase letters
console.log('    Remove whitespace   '.trim()); // Use a string method to log the following string without whitespace at the beginning and end of it.

/* Review
Let’s take one more glance at the concepts we just learned:

Data is printed, or logged, to the console, a panel that displays messages, with console.log().
We can write single-line comments with // and multi-line comments between /* and */.
/* There are 7 fundamental data types in JavaScript: strings, numbers, booleans, null, undefined, symbol, and object.
Numbers are any number without quotes: 23.8879
Strings are characters wrapped in single or double quotes: 'Sample String'
The built-in arithmetic operators include +, -, *, /, and %.
Objects, including instances of data types, can have properties, stored information. The properties are denoted with a . after the name of the object, for example: 'Hello'.length.
Objects, including instances of data types, can have methods which perform actions. Methods are called by appending the object or instance with a period, the method name, and parentheses. For example: 'hello'.toUpperCase().
We can access properties and methods by using the ., dot operator.
Built-in objects, including Math, are collections of methods and properties that JavaScript provides. */ 

// Using variables (var)
var favouriteFood = 'pizza';

var numOfSlices = 8;

console.log(favouriteFood); // it would show pizza
console.log(numOfSlices); // it would show 8

// Changable variable (let)
let changeMe = true
changeMe = false

console.log(changeMe); // it would show as false

// Constant variable (cont)
const entree = 'Enchiladas';
console.log(entree); // this would show Enchiladas
entree = 'Tacos' // This would bring up an error message as it's false

// Maths with let
let x = 20;
x -= 5; // Can be written as x = x - 5
console.log(x); // Output: 15
 
let y = 50;
y *= 2; // Can be written as y = y * 2
console.log(y); // Output: 100
 
let z = 8;
z /= 2; // Can be written as z = z / 2
console.log(z); // Output: 4

// I edited some of the equations below by reassigning the value with a +=, -=, *= and /=
let levelUp = 10;
levelUp += 5;
let powerLevel = 9001;
powerLevel -=100
let multiplyMe = 32;
multiplyMe *= 11;
let quarterMe = 1152;
quarterMe /= 4;

// String Concatenation with Variables
let myPet = 'armadillo';
console.log('I own a pet ' + myPet + '.'); // Output: 'I own a pet armadillo.'


// if, else if, and else statements

// Simple if statement

let sale = true;
sale = false // Once this statement is added the code will not execute as it's now false 
 if (sale) {
   console.log('Time to buy!');
   // Code to execute if the provided condition evaluates to true
 }
 
 // Else statement Example below

if (false) {
  console.log('The code in this block will not run.');
} else {
  console.log('But the code in this block will!');
}
// Prints: But the code in this block will!

// Simple else statement

let sale = true;

sale = false;

if(sale) {
  console.log('Time to buy!');
} else {
  console.log('Time to wait for a sale.')
}


// Comparison Operators
/*
Less than: <
Greater than: >
Less than or equal to: <=
Greater than or equal to: >=
Is equal to: ===
Is not equal to: !==
*/ 

let hungerLevel = 8; // Set hunger level

if (hungerLevel > 7) { // set if statement with comparison >
  console.log('Time to eat!');
}  
else { // simple else statement, nothing else needed
  console.log('We can eat later!');
}

// Logical Operators
/* the and operator (&&)
the or operator (||)
the not operator, otherwise known as the bang operator (!)
*/

// Example of a stoplight

if (stopLight === 'green' && pedestrians === 0) {
  console.log('Go!');
} else {
  console.log('Stop');
}


// Example of weekend

if (day === 'Saturday' || day === 'Sunday') {
  console.log('Enjoy the weekend!');
} else {
  console.log('Do some work.');
}



let mood = 'sleepy'; // setting mood
let tirednessLevel = 7; // setting tiredness 

if (mood === 'sleepy' && tirednessLevel > 8) // bunching two if statements
{ 
  console.log('time to sleep')
} else {
  console.log('not bed time yet')
}

// CONDITIONAL STATEMENTS ternary operators 

// Example 
let isNightTime = true;
 
if (isNightTime) {
  console.log('Turn on the lights!');
} else {
  console.log('Turn off the lights!');
}

// Ternary operator example
isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!'); // Why is is not done this way, seems much faster at first glance?

// Another example, ok this shit is so much simpler & clearer to read

let isLocked = false;

isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');

let isCorrect = true;

isCorrect ? console.log('Correct!') : console.log('Incorrect!'); 

let favoritePhrase = 'Love That!';

favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!")

// else if statements, used for various outcomes, this example shows traffic lights.
// Follows the order, 1) if 2) else if (repeated for everyother outcome) 3) else for the final outcome

let stopLight = 'yellow'; //main variable stoplight but it's let as it will/can change

if (stopLight === 'red') {
  console.log('Stop!');
} else if (stopLight === 'yellow') {
  console.log('Slow down.');
} else if (stopLight === 'green') {
  console.log('Go!');
} else {
  console.log('Caution, unknown!');
}

// Another example of else if
let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if (season === "winter") {
  console.log('It\'s winter! Everything is covered in snow.');
} else if (season === "fall") {
console.log('It\'s fall! Leaves are falling!'); 
} else if (season === "summer") {
  console.log('It\'s sunny and warm because it\'s summer!');
} else {
  console.log('Invalid season.');
}

// Another example of else if
let groceryItem = 'papaya';
 
if (groceryItem === 'tomato') {
  console.log('Tomatoes are $0.49');
} else if (groceryItem === 'papaya'){
  console.log('Papayas are $1.29');
} else {
  console.log('Invalid item');
}

// Switch statement example using above example
let groceryItem = 'papaya';
 
switch (groceryItem) {
  case 'tomato':
    console.log('Tomatoes are $0.49');
    break;
  case 'lime':
    console.log('Limes are $1.49');
    break;
  case 'papaya':
    console.log('Papayas are $1.29');
    break;
  default:
    console.log('Invalid item');
    break;
}
 
// Prints 'Papayas are $1.29'


