var readLine = require('readline-sync')
var chalk = require('chalk');
console.log(chalk.green("Are you a PotterHead?-TEST YOURSELF"));

var score = 0;
var playerDetails = {}
var playerDetailsList = []
var questionstyle = chalk.yellow;
var answerstyle = chalk.green;
var scorestyle = chalk.bgBlue;
var correctanswerstyle = chalk.bold.green;
var wronganswerstyle = chalk.bold.yellow;
questions = [
    "What is the name of 2nd part of Harry Potter Series?\n",
    "Who gave potter the cloak of invisibility?\n",
    "Who killed Dumbledore?\n"
  ]
trueanswer = [1,2,1]


var userName = readLine.question('Enter your name:')
console.log(chalk.yellow("Welcome " + userName + "!!!"))
console.log("Lets Start!!")
function play(questions,trueanswer)  {
  
  var options = ""
  var answer = ""
  for(i=0;i<questions.length;i++)
  {
     console.log("\n-----------------------------\n");
    if(i==0) 
    {
      console.log(questionstyle(questions[i]));
      options = ["Chamber of Secrets" , "Prisoner of Azkaban" , "The Sorcerers stone"]
      printoptions(options)
      answer = parseInt(readLine.question("Enter your answer:"))
      if(answer === trueanswer[i])
      {
        correctanswer();
        continue;
      }
      else
      {
        wronganswer();
        continue;
      }

    }
    else if(i==1) 
    {
      console.log(questionstyle(questions[i]));
      options = ["Wiesley Brothers" , "Albus Dumbledore",'Rubis Hagrid']
      printoptions(options)
      answer = parseInt(readLine.question("Enter your answer:"))
      if(answer === trueanswer[i])
      {
        correctanswer();
      continue
        
      }
      else
      {
        wronganswer()
        continue;
      }
    }
    else if(i==2) 
    {
      console.log(questionstyle(questions[i]));
      options = ["Severous Snape" , "The Dark Lord"]
      printoptions(options)
      answer = parseInt(readLine.question("Enter your answer:"))
      if(answer === trueanswer[i])
      {
        correctanswer();
      continue
        
      }
      else
      {
        wronganswer()
        continue;
      }
      
      
    }
   
  }
  if(score == i)
  {
    console.log(answerstyle('YOU WON!!!\nYOU ARE NOW ELIGIBLE TO JOIN THE MAGIC SCHOOL OF NEOGCAMP'))
  }
  else
  {
    console.log(questionstyle('YOU LOSE!!BETTER LUCK NEXT TIME'))
  }
 playerDetails.name = userName
 playerDetails.score = score
 console.log("Player Details are:")
 console.log(playerDetails)
}



function printoptions(answer) {
  var option_counter = 1
  for(var i=0;i<answer.length;i++)
  {
    console.log(answerstyle(option_counter + "]" + answer[i]+"\n"));
     option_counter++;
  }
}

function correctanswer() {
  score++;
  console.log(correctanswerstyle("Yay!Correct!!"))
  console.log(scorestyle("Score: " + score))
}
function wronganswer() {
  console.log(wronganswerstyle("Oops!It seems..You need to kow potter better!"))  
  score--;
  console.log(scorestyle("Score: " + score))
}


play(questions,trueanswer)



