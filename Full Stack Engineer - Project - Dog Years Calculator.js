// Simple dog years calculator
// Who doesn't want to know how old their pupperinos are in human years ... Kinda makes theme even cuter right

const myAge = 40; // my age when BTC will be worth 1 million

let earlyYears = 2; 
earlyYears *= 10.5; // first years of a dogs life is equal to 10.5 years

let laterYears = myAge - 2; 
laterYears *= 4; // the later years of a dogs life is equal to 10.5 years

console.log(earlyYears);
console.log(laterYears);

let myAgeInDogYears = earlyYears + laterYears;

const myName = 'Angel';

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
