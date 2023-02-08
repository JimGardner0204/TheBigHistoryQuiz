let mainQuiz = document.getElementById('mainquiz')
let answerA1 = document.querySelectorAll('.answer')
let questionmain = document.getElementById('topquestion')
let texta = document.getElementById('a_text')
let textb = document.getElementById('b_text')
let textc = document.getElementById('c_text')
let textd = document.getElementById('d_text')
let submitbutton = document.getElementById('submit')

let currentQuiz = 0;
let score = 0;

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

