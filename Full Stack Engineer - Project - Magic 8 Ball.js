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
  eightball = 'Cannot predict now';
  break;
  case 4: 
  eightball = 'Do not count on it';
  break;
  case 5: 
  eightball = 'My sources say no';
  break;
  case 6: 
  eightball = 'Outlook not so good';
  break;
  case 7: 
  eightball = 'Signs point to yes';
  break;
} 

console.log(`The eight ball answered: ${eightBall}`);
