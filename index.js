const readlineSync = require('readline-sync');
const chalk = require('chalk');

let score = 0;

const questionSetOne = [
  {
    question : "When you think of Captain America, which library does it symbolizes?",
    answer : "React",
    option : ['Angular','React','Svelte','Backbone']
  },
  {
    question : "When you think of Hulk, which library does it symbolizes?",
    answer : "Node",
    option : ['Vue','Svelte','React','Node']
  },
  {
    question : "When you think of Iron Man, which library does it symbolizes?",
    answer : "Angular",
    option : ['Node','Angular','Electron','Backbone']
  },
  {
    question : "When you think of Black Widow, which library does it symbolizes?",
    answer : "Electron",
    option : ['Electron','React','Vue','Backbone']
  },
  {
    question : "When you think of Groot, which library does it symbolizes?",
    answer : "Vue",
    option : ['Vue','React','Node','Backbone']
  }
];

const questionSetTwo = [
  {
    question : "Declare constant variable with?",
    answer : "const",
    option : ['let','constant','var','const']
  },
  {
    question : "Declare block scoped variable with?",
    answer : "let",
    option : ['var','block','let','local']
  },
  {
    question : "Stack means",
    answer : "FIFO",
    option : ['FIFA','FILA','FIFO','FILO']
  },
  {
    question : "How does hoisting work in functions?",
    answer : "Function Defination hoisted",
    option : ['Function Expression hoisted','Function Declaration hoisted','Function Defination hoisted','Function Name hoisted']
  },
  {
    question : "[...] in javascript represents?",
    answer : "Hard to say",
    option : ['Spread','Rest','Destructure','Hard to say']
  }
];


function letsPlay(questionSet) {
  score = 0;
  for(let i=0; i < questionSet.length ; i++)
{
  var index = readlineSync.keyInSelect(questionSet[i].option, questionSet[i].question );
  console.log(questionSet[i].option[index]);
  if(questionSet[i].option[index] == questionSet[i].answer) {
    console.log(chalk.bgGreen("Correct"));
    score ++;
  } else {
    console.log(chalk.bgRed("Wrong"));
  }
  console.log(chalk.bgYellow('Current Score : '+score));
  console.log(chalk.blue("============================================================================="));
}
console.log(chalk.bgBlue('Your Score after this level: '+score));
return score;
}

var roundOneScore = letsPlay(questionSetOne);
console.log(roundOneScore);
if(roundOneScore == 5) {
console.log('You answered all the questions correctly,moving onto the next level!');
var roundTwoScore = letsPlay(questionSetTwo);
console.log(roundTwoScore);
} else {
  console.log('Try harder to move onto the next level!');
}

// for(let i=0; i < questionSetOne.length ; i++)
// {
//   var index = readlineSync.keyInSelect(questionSetOne[i].option, questionSetOne[i].question );
//   console.log(questionSetOne[i].option[index]);
//   if(questionSetOne[i].option[index] == questionSetOne[i].answer) {
//     console.log(chalk.bgGreen("Correct"));
//     score ++;
//   } else {
//     console.log(chalk.bgRed("Wrong"));
//   }
//   console.log(chalk.bgYellow('Current Score : '+score));
//   console.log(chalk.blue("============================================================================="));
// }
// console.log(chalk.bgBlue('Your Score after Level 1 : '+score));