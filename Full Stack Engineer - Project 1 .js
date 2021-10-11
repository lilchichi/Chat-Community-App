// Task:
// Deep in his mountain-side meteorology lab, the mad scientist Kelvin has mastered weather prediction.
// Recently, Kelvin began publishing his weather forecasts on his website. However there’s a problem: All of his forecasts describe the temperature in Kelvin.
// With our knowledge of JavaScript, let’s convert Kelvin to Celsius, then to Fahrenheit.

const kelvin = 0; // Create a constant value for kevlin
const celsius = kelvin - 273; // Celsius is always 273 degrees lower than kelvin so create a variable for celsius
let fahrenheit = celsius * (9 / 5) + 32; // Convert celsius to fahrenheit
fahrenheit = Math.floor(fahrenheit); // Round down fahrenheit, otherwise it'll be decimal points
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);


