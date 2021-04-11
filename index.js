const figlet = require('figlet');
const readlineSync = require('readline-sync');
const chalk = require('chalk');
const terminalLink = require('terminal-link');

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
    answer : "FILO",
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

const leaderBoard = [{
  name : 'Alpha',
  score : '10'
},
{
  name : 'Beta ',
  score : '10'
},
{
  name : 'Gamma',
  score : '9'
}];

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

figlet('JavascriptXover', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(chalk.yellow(data));
    const link = terminalLink('Made with ❤ codewithbravopy', "https://www.instagram.com/codewithbravopy");
    console.log(chalk.bgCyan(link));
    gameStart();
});


const gameStart = () => {
  var userName = readlineSync.question('May I have your name? ');
  console.log(chalk.cyan('Hi ' + userName + '!'));
  console.log(chalk.green('The rules are simple, answer all the questions correctly in level 1 to procced to the next one! All the best!👍'));
  var roundOneScore = letsPlay(questionSetOne);
  
  if(roundOneScore == 5) {
    console.log(chalk.red('You answered all the questions correctly,moving onto the next level!'));
    var roundTwoScore = letsPlay(questionSetTwo);
    console.log(chalk.green("============================================================================="));
    console.log(chalk.blue("====================================GAME OVER================================"));
    console.log(chalk.green("============================================================================="));
    console.log(chalk.red('Your final score is : ',roundOneScore+roundTwoScore));
    if(roundOneScore+roundTwoScore == 10) {
      console.log(chalk.bgBlue('Damn, you are good!'));
    } else {
      console.log(chalk.bgBlue('You are getting there almost!'));
    }
    console.log(chalk.bgRed('=======LEADERBOARD======='));
    console.log(chalk.bgCyan(`Name      Score`));
    for(var i = 0; i < leaderBoard.length; i++) {
      console.log(chalk.bgCyan(`${leaderBoard[i].name}     ${leaderBoard[i].score}`));
    }
    console.log(chalk.bgCyan('========================='));
    if (leaderBoard[leaderBoard.length-1].score < (roundOneScore+roundTwoScore)) {
      console.log("Send me a screenshot of your score so that i can update your name in the leaderboard!");
    } else {
      console.log('Try harder to enter the leaderboard');
    }
  } else {
    console.log(chalk.bgRed('Try harder to move onto the next level!'));
  }
} 
