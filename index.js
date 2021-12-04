const rs =require('readline-sync');
const chalk = require('chalk');

var playerName = rs.question(chalk.blue.bold("Who are you?\n"));
var score = 0;

console.log(chalk.blue.bold('Hey '+playerName+", how well do you know me? Let's play a game!\n"));

function gamePlay(question , answer){
  var ans  = rs.question(chalk.cyanBright(question));
  if(answer.includes(ans.toLowerCase())){
    console.log(chalk.green('Correct'));    
    score++;
    console.log('Score  : ' + score);    
  }
  else{
    console.log(chalk.red('Wrong'));    
	  // score = (score == 0) ? 0 : score - 1;
    console.log('Score  : ' + score);    
  }
    console.log(chalk.blue('\n------------------------------\n'));    
} 

queArray = [
  {
    que:"What's my name? ",
    ans:["ritu"]
  },
  {
    que:"What's my hobby? ",
    ans: ["dance", "dancing"]
  },
  {
    que:"What's my favourite color? ",
    ans:["black", "blue"]
  },
  {
    que:"What was my nickname in college? ",
    ans:["moon"]
  },
  {
    que:"How many hours of sleep do you need each night to feel good? ",
    ans:["7", "8"]
  }
];

for(let i =0 ; i<queArray.length;i++){
  gamePlay(queArray[i].que,queArray[i].ans);

}
console.log('Final score is  : ' + score+"/"+queArray.length);    


