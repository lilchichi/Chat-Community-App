// Race day registration - A few things to think about, first rounding the race numbers, then age & whether they registered earl/late
// Those factors would determine the start time

let raceNumber = Math.floor(Math.random() * 1000);

let early = true;
let age = 25;

if(early && age > 18){
  raceNumber += 1000;
} 

if(age => 18 && early){
  console.log(`Race will begin 9:30, your race number is: ${raceNumber}.`);
}
else if(age => 18 && !early){
  console.log(`Race will begin 11:00, your race number is: ${raceNumber}.`);
}

else if(age < 18){
  console.log(`Race will begin 12:30, your race number is: ${raceNumber}.`);
}
