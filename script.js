/* script.js for Code Quiz - under development, adjust to mockup and task */
// find, identify elements, set initial values; discussion with study-group+; vars unused issues
var startEl = document.querySelector("#start-quiz");
var timerEl = document.getElementById("countdown");
var quizPage = document.querySelector(".quiz-page");
var answerEl = document.getElementById("answer-button");
var questionIndex = 0;
var timeLeft = 75;
var resultsPage = document.querySelector(".result-page");

//event Listener to start time
document.querySelector("#start-quiz").addEventListener("click", function() {
// clears / hides intro page section to start quiz, to review and confirm
  var element = document.getElementById("intro");
  element.parentNode.removeChild(element);
  // call timer function, call questions array sequence
  countdown();
  getQuestion();
});

// countdown function from 75 seconds, not working: why the problem? placement in js?
function countdown() {
  var timeInterval = setInterval(function() {
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + " seconds remaining";
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = timeLeft + " second remaining";
      timeLeft--;
    } else {
      timerEl.textContent = "";
      clearInterval(timeInterval);
      alert("Time's up!");
    }
  }, 1000);
}

/* question.js possible as separate js file but here embedded in single js */
const questions = [
  {
    question: "1. Commonly used data types do not include:",
    answer: "3. alerts",
      options: [
        "1. strings",
        "2. booleans",
        "3. alerts",
        "4. numbers"
       ]
    },
    {
      question: "2. The condition of an if / else statement is enclosed with _____.",
      answer: "2. curly brackets",
      options: [
        "1. quotes",
        "2. curly brackets",
        "3. parenthesis",
        "4. square brackets"
        ]
    },
    {
      question: "3. Arrays in JavaScript can be used to store _____.",
      answer: "4. all of the above",
      options: [
        "1. numbers",
        "2. other arrays",
        "3. booleans",
        "4. all of the above"
        ]
    },
    {
        question: "4. String values must be enclosed within _____ when being assigned to variables.",
        answer: "4. parentheses",
        options: [
            "1. commas",
            "2. curly brackets",
            "3. quotes",
            "4. parentheses"
        ]
    },
    {
        question: "5. A very useful tool used during development and debugging for printing content to the debugger is:",
        answer: "4. console log",
        options: [
          "1. JavaScript",
          "2. terminal / bash",
          "3. for loops",
          "4. console log"
        ]
    }
 ];
// creates question elements inside Javascript
function getQuestion() {
  var div = document.createElement("div");
  var h1 = document.createElement("h1");
  var buttonOne = document.createElement("button");
  var buttonTwo = document.createElement("button");
  var buttonThree = document.createElement("button");
  var buttonFour = document.createElement ("button");

// reads content of questions from above array, 4 options answer choices
h1.textContent = questions[questionIndex].question;
buttonOne.textContent = questions[questionIndex].options[0];
buttonTwo.textContent = questions[questionIndex].options[1];
buttonThree.textContent = questions[questionIndex].options[2];
buttonFour.textContent = questions[questionIndex].options[3];

// EventListeners for answer buttons
buttonOne.addEventListener("click", checkAnswer);
buttonTwo.addEventListener("click", checkAnswer);
buttonThree.addEventListener("click", checkAnswer);
buttonFour.addEventListener("click", checkAnswer);

// put content on page, to review this... innerHTML & appendChild -- needed !
div.appendChild(h1);
div.appendChild(buttonOne);
div.appendChild(buttonTwo);
div.appendChild(buttonThree);
div.appendChild(buttonFour);
quizPage.innerHTML = "";
quizPage.appendChild(div);

} 

//check answers click-events for correct or incorrect
function checkAnswer(event) {
  var userChoice = event.target.innerText
  if (userChoice === questions[questionIndex].answer) {
    alert("Correct!")
  } else {
    alert("Incorrect!")
    timeLeft -= 10; 
  }
  questionIndex++;
  if (questionIndex < questions.length) {
    getQuestion ();
  } else {   
    finalScore();
  }
}

function finalScore () {
  var div = document.createElement("div");
  var h1 = document.createElement("h1");
  var p1 = document.createElement("p1");
  var p2 = document.createElement("p2");
  var input = document.createElement("input");
  var button = document.createElement("button");
  localStorage.setItem(timerEl.textContent);

// add content
h1.textContent = "Done!";
p1.textContent = "Your final score is " + timerEl.textContent;
p2.textContent = "Enter initials: ";
input.textContent = "";
button.textContent = "Submit";

// put content on page
div.appendChild(h1);
div.appendChild(p1);
div.appendChild(p2);
div.appendChild(input);
div.appendChild(button);
checkAnswer.innerHTML = "";
checkAnswer.appendChild(div);
}

/* final additional page with High scores function incomplete ?
also clear high scores and go back reset/restart buttons */
function highscore() {
  var div = document.createElement("div");
  var h1 = document.createElement("h1");
  var input = document.createElement("input");
  var button = document.createElement("button"); 
  var button = document.createElement("button");

  // add content
  h1.textContent = "High scores";
  input.textContent = localStorage.getItem("score")
  p2.textContent = "Enter initials: ";
  input.textContent = "";
  button.textContent = "Go back";
  button.textContent = "Clear high scores";

  // put content on page
  div.appendChild(h1);
  div.appendChild(input);
  div.appendChild(button);
  div.appendChild(button);
  div.appendChild(div);
}

