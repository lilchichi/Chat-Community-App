const UserName = 'LiChiChi';

UserName ? console.log(`Wagwarn ${UserName}`) : console.log(`Who dis?`);

let userQuestion = 'What are you trying to tell me, that I can trade my Bitcoin for millions one day?' 

console.log('${userName} asked: ${userQuestion}');

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

switch(randomNumber){
  case 0:
  eightball = 'Yes';
  break;
  case 1:
  eightball = 'Maybe';
  break;
  case 2:
  eightball = 'No';
  break;
  case 3: 
  eightball = 'Only sinners sell';
  break;
  case 4: 
  eightball = 'Do not count on it';
  break;
  case 5: 
  eightball = 'My sources say no';
  break;
  case 6: 
  eightball = 'When you\'re ready, you won\'t have to';
  break;
  case 7: 
  eightball = 'Sell it for what, 1 million dirty fiat';
  break;
} 

console.log(`The eight ball answered: ${eightBall}`);
