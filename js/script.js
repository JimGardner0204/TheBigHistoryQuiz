/**
 * The basic HTML quiz logic in this file was adopted from Coding with Nicks quiz tutorial:
 * https://codingwithnick.in/create-a-quiz-app-using-html-css-javascript/
 */

const mainQuiz = document.getElementById('mainquiz')
const answerA1 = document.querySelectorAll('.answer')
const questionmain = document.getElementById('topquestion')
const texta = document.getElementById('a_text')
const textb = document.getElementById('b_text')
const textc = document.getElementById('c_text')
const textd = document.getElementById('d_text')
const submitbutton = document.getElementById('submit')

let currentQuiz = 0;
let score = 0;

function getQuestions (numQuestions) {
    let randomIndices = [];
    let questions = [];

do {
	// Generating random number
	const randomNumber = (Math.floor(Math.random() * QUESTIONS.length))

	// Pushing into the array only
	// if the array does not contain it
	if (!randomIndices.includes(randomNumber)) {
		randomIndices.push(randomNumber);
	}

} while (randomIndices.length < numQuestions);

for(const num of randomIndices) {
    questions.push(QUESTIONS[num]);
}

return questions;

}

const QUIZ_CONTENT = getQuestions(7);

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    let currentQuizData = QUIZ_CONTENT[currentQuiz]

    questionmain.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerA1.forEach(answerA1 => answerA1.checked = false)
}

function getSelected() {
    let answer
    answerA1.forEach(answerA1 => {
        if (answerA1.checked) {
            answer = answerA1.id
        }
    })
    return answer
}

submitbutton.addEventListener('click', () => {
    let answer = getSelected()
    if (answer) {
        if (answer === QUIZ_CONTENT[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if (currentQuiz < QUIZ_CONTENT.length) {
            loadQuiz()
        } else {
            mainQuiz.innerHTML = `
            <h2>You answered ${score}/${QUIZ_CONTENT.length} questions correctly</h2>
            
            <button onClick = "location.reload()">Reload</button>`
        }
    }
})

