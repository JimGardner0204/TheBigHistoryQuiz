/*jshint esversion: 6 */

/**
 * The basic HTML quiz logic in this file was adopted from Coding with Nicks quiz tutorial:
 * https://codingwithnick.in/create-a-quiz-app-using-html-css-javascript/
 */

// initialise DOM selectors used in display quiz questions and answers as well as scoring
const mainQuiz = document.getElementById('mainquiz');
const answerA1 = document.querySelectorAll('.answer');
const questionmain = document.getElementById('topquestion');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitbutton = document.getElementById('submit');
const progressText = document.getElementById('progress');
const currentScoreText = document.getElementById('currentScore');

// intialise current question and score 
let currentQuiz = 0;
let score = 0;

/*
get random questions from question bank
logic adopted from https://www.geeksforgeeks.org/how-to-create-an-array-containing-non-repeating-elements-in-javascript/ 
*/
function getQuestions(numQuestions) {
    let randomIndices = [];
    let questions = [];

    do {
        // Generating random number
        const randomNumber = (Math.floor(Math.random() * QUESTIONS.length));

        // Pushing into the array only
        // if the array does not contain it
        if (!randomIndices.includes(randomNumber)) {
            randomIndices.push(randomNumber);
        }

    } while (randomIndices.length < numQuestions);
    //now return questions

    for (const num of randomIndices) {
        questions.push(QUESTIONS[num]);
    }

    return questions;

}

// randomly get 7 questions for the quiz so the user gets different questions each time they take the quiz
const QUIZ_CONTENT = getQuestions(7);

// call function to display a question
loadQuiz();

/*
function to display questions to user
1. unselects all answers
2. gets questions to ask
3. populates questions and answers
4. updates progress text and current score
5. function adopted from https://codingwithnick.in/create-a-quiz-app-using-html-css-javascript/
*/
function loadQuiz() {

    deselectAnswers();

    let currentQuizData = QUIZ_CONTENT[currentQuiz];

    questionmain.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    progressText.innerText = `Question ${currentQuiz+1}/${QUIZ_CONTENT.length}`;
    currentScoreText.innerText = `Current Score: ${score}/${QUIZ_CONTENT.length}`;
}

/*
function to unselect answers when going to next question 
directly from tutorial https://codingwithnick.in/create-a-quiz-app-using-html-css-javascript/
*/
function deselectAnswers() {
    answerA1.forEach(answerA1 => answerA1.checked = false);
}

/*
function to loop through through answers and passes out id of selected option
directly from tutorial https://codingwithnick.in/create-a-quiz-app-using-html-css-javascript/
*/
function getSelected() {
    let answer;
    // loop through answer radio buttons
    answerA1.forEach(answerA1 => {
        //if answer is checked, set answer to its id
        if (answerA1.checked) {
            answer = answerA1.id;
        }
    });
    return answer;
}


/*
function to process submit button for question
1. gets selected option
2. checks if the selected options id is the same as the questions JSON correct value
adopted from tutorial https://codingwithnick.in/create-a-quiz-app-using-html-css-javascript/
*/

submitbutton.addEventListener('click', () => {
    // get users answers
    let answer = getSelected();
    // make user have a radio button selected
    if (answer) {
        //check if answer matches JSON
        if (answer === QUIZ_CONTENT[currentQuiz].correct) {
            score++;
        }

        //increment question X of N index
        currentQuiz++;

        //make sure number of questions isnt exceeded
        if (currentQuiz < QUIZ_CONTENT.length) {
            loadQuiz();
        } else {
            //update DOM for final score and take again button
            mainQuiz.innerHTML = `
            <h2>You answered ${score}/${QUIZ_CONTENT.length} questions correctly</h2>
            
            <button onClick = "location.reload()">Reload</button>`;
        }
    }
});

/*
Load function to show main quiz if javascript is present
*/
document.onreadystatechange = function () {
    let state = document.readyState;
    if (state == 'complete') {
        // show quiz area since DOM manipulation is possible 
        mainQuiz.classList.remove('hide');
    }
};