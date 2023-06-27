var startQuiz = $('#start')
var viewScore = $('#viewscore')
var timeLeft = $('#timeleft')
var time = 100
var guess = $('#guess')
var reveal = $('#reveal')
var index = 0
var questions = [
    {
        question: "How do you define an array in Javascript?",
        answers: ["By data", "By numbers", "By true/false", "With square brackets"],
        answerkey: "With square brackets"
    },
    {
        question: "How do you define an array in Javascript?",
        answers: ["By data", "By numbers", "By true/false", "With square brackets"],
        answerkey: "With square brackets"
    },
    {
        question: "How do you define an array in Javascript?",
        answers: ["By data", "By numbers", "By true/false", "With square brackets"],
        answerkey: "With square brackets"
    },
    {
        question: "How do you define an array in Javascript?",
        answers: ["By data", "By numbers", "By true/false", "With square brackets"],
        answerkey: "With square brackets"
    },
]
function startGame() {
guess.text(questions[0].question)
}
var interval;

function countdown() {
interval = setInterval(function() {
    time--
    timeLeft.text("Time Left" + " " + time)
},1000)
}
startQuiz.click(function() {
    countdown()
    startGame()
})