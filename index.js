var readlineSync = require("readline-sync");
const chalk = require('chalk');
var highScores = [
  {
    name: "Rohit",
    score: "5",
  },
  {
    name: "Prasad",
    score: "4",
  }

]
var questions = [
  {
    question: "What is the currency of India? ",
    answer: "Rupee",
  },
  {
    question: "What is the national fruit of India? ",
    answer: "Mango",
  },
  {
    question: "What is the National animal of India? ",
    answer: "Tiger",
  },
  {
    question: "How many states are there in India? ",
    answer: "28",
  },
  {
    question: "What is the National Bird of India? ",
    answer: "Peacock"
  },
  {
    question: "Which city was once known as the Manchester of India? ",
    answer: "Surat"
  }
]

var score = 0;

function welcome() {
  var userName = readlineSync.question(chalk.yellow("Enter your Name "));
  console.log("Welcome", chalk.green(userName),"to the G.K Quiz"); 
}


function play(question, answer)
{
  var userAnswer = readlineSync.question(chalk.yellow(question));

  if(userAnswer.toUpperCase() === answer.toUpperCase())
  {
    console.log(chalk.green("Your Answer is correct! "));
    score++;
  }
  else
  {
    console.log(chalk.red("Your Answer is Wrong! "));
  }

  console.log("Current Score", chalk.green(score));
  console.log("--------------------");
}

function game(){
  for(var i = 0; i < questions.length; i++)
  {
    play(questions[i].question, questions[i].answer);
  }
}

function showFinalScore()
{
  console.log("Your score is ", chalk.green(score));
  console.log(chalk.blue("Check out the high scores, if you have beaten the highest score then ping me with a screenshot and I'll update it"));
  for(var i = 0; i < highScores.length; i++)
  {
    console.log(chalk.magenta(highScores[i].name, " ", highScores[i].score));
  }
}


welcome();
game();
showFinalScore();