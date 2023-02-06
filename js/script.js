let quizContent = [
    {
        question: "Who was the sixth and final wife of Henry VIII?",
        1: "Anne Boleyn",
        2: "Catherine of Aragon",
        3: "Jane Seymour",
        4: "Catherine Parr",
        correct: "4",
    }
    {
        question: "What did the Romans call Scotland?",
        1: "Caledonia",
        2: "Celtic",
        3: "Hebrides",
        4: "Albion",
        correct: "1",
    }
    {
        question: "In 1918 Finland declared its independence from which country?",
        1: "Norway",
        2: "Denmark",
        3: "Sweden",
        4: "Russia",
        correct: "Russia",
    }
];

let mainQuiz = document.getElementById('mainquiz')
let answer = document.querySelectorAll('.answer')
let question1 = document.getElementById('topquestion')
let text1 = document.getElementById('1-text')
let text2 = document.getElementById('2-text')
let text3 = document.getElementById('3-text')
let text4 = document.getElementById('4-text')
let submitbutton = document.getElementById('submit')

let currentQuiz = 0;
let score = 0;

function loadQuiz () {
    deselectAnswers()

    let currentQuizData = quizData[currentQuiz]
    question1.innerText = currentQuizData.question

    text1.innerText = currentQuizData.1
    text2.innerText = currentQuizData.2
    text3.innerText = currentQuizData.3
    text4.innerText = currentQuizData.4
};

function deselectAnswers 