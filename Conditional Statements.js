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





