/* script.js for Code Quiz - under development, adjust to mockup and task */
const startButton= document.getElementbyId("start-btn");
const questionContainerElement = document.getElementById ("question-container");
const questionElement = document.getElementbyId ("question")
const answerButtonsElement = document.getElementById("answer-buttons")
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++
  setNextQuestion()
})
/* to review fix */


function startQuiz () {
  startButton.classList.add("hide")
  questionContainerElement.classList.add("hide")
  shuffledQuestions=question.sort(() => Math.random() - .5)
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide")
  setNextQuestion()
}

function selectAnswer () {

}

startButton.classList.add("hide");

//nextQuestion not part of Challenge setup //
function setNextQuestion() { 
  resetState()
  showQuestion (shuffledQuestions[currentQuestionIndex]);
}
/* setting up the Q & A Arrays */


 function showQuestion(question) {
  questionElement.innerText = document.getElementById("question");
  hover.getElementById ("answer-btn");
  
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
  const button = document.createElement("button")
  button.innerText = answer.text;
  button.classList.add("btn")
   if (answer.correct) {
    button.dataset.correct = answer.correct
    button.addEventListener("click", selectAnswer);
    answerButtonElement.appendChild("button");

   }
  }
/* was    else here or ? errors here as well */

function resetState() {
  clearStatusClass (document.body)
  nextButton.classList.add ("hide");
  while (answerButtonElement.firstChild)
  answerButtonsElement.removeChild
  hoverButtonElement.removeChild;
  (answerButtonsElement.firstChild);
}
 
const nextButton=document.getElementById("next-btn");

selectAnswer (e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide")
  } else {
    startButton.innerText = "Restart"
    startButton.classList.remove("hide")
  }
}
  
}
}
function setStatusClass (element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add ("correct")
  } else {
    element.classList.add("wrong")
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct")
  element.classList.remove("wrong")
}

//array of questions
const questions = [
  { 
    question: "what is 2+2",
    answers: [ 
   {text: "4", correct: true},
   {text: "22", correct: false},
  ]
  },
  { 
    question: "what is 3+3",
    answers: [ 
   {text: "6", correct: true},
   {text: "33", correct: false},
  ]
  },
  { 
    question: "what is 4+4",
    answers: [ 
   {text: "8", correct: true},
   {text: "44", correct: false},
  ]
  },
  { 
    question: "what is 5+5",
    answers: [ 
   {text: "10", correct: true},
   {text: "55", correct: false},
  ]
  },
  { 
    question: "what is 6+6",
    answers: [ 
   {text: "12", correct: true},
   {text: "66", correct: false},
    ]
  },
]







