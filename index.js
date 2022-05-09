const readlineSync = require('readline-sync');
const colors = require('colors');
var highScore = 0
var highScorer
 const questions = [{
  question: "1>Who won the first ever Cricket World Cup in 1975 ? \n",
  optionOne: 'a>Australia',
  optionTwo: 'b>England',
  optionThree: 'c>India',
  optionFour: 'd>West Indies',
  rightAnswer: 'd'
}, {
  question: "2>What is the largest Cricket Stadium in the World  ? \n",
  optionOne: 'a>Eden Gardens',
  optionTwo: 'b>Melbourne Cricket Club',
  optionThree: 'c>Lords',
  optionFour: 'd>Narendra Modi Stadium',
  rightAnswer: 'd'
}, {
  question: "3>How long is the wicket on a cricket pitch? \n",
  optionOne: 'a>18 yards',
  optionTwo: 'b>20 yards',
  optionThree: 'c>22 yards',
  optionFour: 'd>24 yards',
  rightAnswer: 'c'
}, {
  question: "4>What is the nickname of Sachin Tendulkar? \n",
  optionOne: 'a>The Little Genius',
  optionTwo: 'b>The Little Master',
  optionThree: 'c>The God of Cricket',
  optionFour: 'd>Master Blaster',
  rightAnswer: 'b'
}, {
  question: "5>Which fast bowler has taken the most test wickets? \n",
  optionOne: 'a>Stuart Broad',
  optionTwo: 'b>Dale Steyn',
  optionThree: 'c>Glenn McGrath',
  optionFour: 'd>James Anderson',
  rightAnswer: 'd'
}, {
  question: "6>Which Australian player has scored the most test runs? \n",
  optionOne: 'a>Steve Waugh',
  optionTwo: 'b>Don Bradman',
  optionThree: 'c>Ricky Ponting',
  optionFour: 'd>Matthew Hayden',
  rightAnswer: 'c'
}, {
  question: "7>Who is the only batsman to record 400 runs in an international Test match? \n",
  optionOne: 'a>Steve Smith',
  optionTwo: 'b>WG Grace',
  optionThree: 'c>Don Bradman',
  optionFour: 'd>Brian Lara',
  rightAnswer: 'd'
}, {
  question: "8>Who is the first batsman to cross 10,000 runs in tests? \n",
  optionOne: 'a>Sunil Gavaskar',
  optionTwo: 'b>Sachin Tendulkar',
  optionThree: 'c>Allan Border',
  optionFour: 'd>Brian Lara',
  rightAnswer: 'a'
}, {
  question: "9>What is the name of the cricket bible? \n",
  optionOne: 'a>Willsden Cricketers Almanack',
  optionTwo: 'b>Willsden Cricketers Handbook',
  optionThree: 'c>Wisden Cricketers Handbook',
  optionFour: 'd>Wisden Cricketers Almanack',
  rightAnswer: 'd'
}, {
  question: "10>Who bowled the fastest delivery ever of 100.2mph? \n",
  optionOne: 'a>Brett Lee',
  optionTwo: 'b>Shoaib Akhtar',
  optionThree: 'c>Shaun Tait',
  optionFour: 'd>Jeffrey Thompson',
  rightAnswer: 'b'
}];
do {
  var userName
  var score = 0

  greeting()
  for (var i = 0; i < questions.length; i++) {
    console.log(colors.magenta(questions[i].question))
    console.log(colors.blue(questions[i].optionOne))
    console.log(colors.blue(questions[i].optionTwo))
    console.log(colors.blue(questions[i].optionThree))
    console.log(colors.blue(questions[i].optionFour))
    verifyAnswer()
  }
  displayScore()


} while (playAgain() === 0)
function greeting() {
  userName = readlineSync.question(colors.bgBlue.black('Enter your name please : '))
  var greetingMessage = '\nwelcome ' + userName + '!\n'
  console.log(colors.cyan(greetingMessage))
  console.log(colors.bgBlack.green("Let's take a Quiz\n"))
}
function inputAnswer() {
  var response = readlineSync.question(colors.grey('Enter your response : '))
  return response
}
function verifyAnswer() {
  var check = inputAnswer()
  if (check === questions[i].rightAnswer) {
    console.log(colors.green('\nCorrect answer!\n'))
    score = score + 10
  }
  else {
    console.log(colors.red('\nWrong answer!\n'))
  }
}
function displayScore() {
  console.log(colors.yellow('your score is ', score))
  if (score > highScore) {
    highScore = score
    highScorer = userName
    console.log(colors.red("\nnew high score is ", highScore +
      '  player name : ', highScorer))
  }
  else if (score < highScore) {
    console.log(colors.gray('\nHigh Score is', highScore + '    player name : ', highScorer))
  }
  else {
    console.log(colors.yellow('\nScore Tie '))
  }
  console.log('\n')

}
function playAgain() {
  var resume
  var startagain = readlineSync.question(colors.bgBlue.white('\nDo you want to play again? yes/no :\n'))
  if (startagain == 'yes') {
    resume = 0
  }
  else {
    resume = 1
  }
  return resume
}

