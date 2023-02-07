let quizContent = [{
        question: "1. Who was the sixth and final wife of Henry VIII?",
        a: "Anne Boleyn",
        b: "Catherine of Aragon",
        c: "Jane Seymour",
        d: "Catherine Parr",
        correct: "d",
    },
    {
        question: "2. What did the Romans call Scotland?",
        a: "Caledonia",
        b: "Celtic",
        c: "Hebrides",
        d: "Albion",
        correct: "a",
    },
    {
        question: "3. In 1918 Finland declared its independence from which country?",
        a: "Norway",
        b: "Denmark",
        c: "Sweden",
        d: "Russia",
        correct: "d",
    },
    {
        question: "4. The German Attack on which country caused Britain to enter WW2?",
        a: "Poland",
        b: "Russia",
        c: "Czech Republic",
        d: "Austria",
        correct: "a",
    },
    {
        question: "5. In which year was Margaret Thatcher first elected Prime Minister in Britain?",
        a: "1972",
        b: "1984",
        c: "1979",
        d: "1976",
        correct: "c",
    },
    {
        question: "6. Adolf Hitler was born in which country?",
        a: "Germany",
        b: "France",
        c: "Austria",
        d: "Hungary",
        correct: "d",
    },
    {
        question: "7. What city was John F Kennedy assasinated in?",
        a: "New York",
        b: "Austin",
        c: "Dallas",
        d: "Miami",
        correct: "c",
    },
    {
        question: "8. The Magna Carta was published by the King of which country? ",
        a: "France",
        b: "England",
        c: "Spain",
        d: "Italy",
        correct: "b",
    },
    {
        question: "9. The disease that ravaged and killed a third of Europe's population in the 14th century is known as:",
        a: "The White Death",
        b: "Plague (Black Death)",
        c: "Small Pox",
        d: "Malaria",
        correct: "b",
    },
    {
        question: "10. The Hundred Years War was fought between what two countries?",
        a: "Italy and Carthage",
        b: "England and Germany",
        c: "France and England",
        d: "Spain and France",
        correct: "c",
    },
    {
        question: "11. Which Roman Emperor built a massive wall across Northern Britain in 122 A.D.?",
        a: "Marcus Aurelius",
        b: "Hadrian",
        c: "Nero",
        d: "Augustus",
        correct: "b",
    },
    {
        question: "12. In 1594, William Shakespeare joined the company of which London theatre?",
        a: "Broadway",
        b: "Oxford University Theatre",
        c: "The Globe",
        d: "The London Palladium",
        correct: "a",
    },
    {
        question: "13. Which nation did The Khmer Rouge regime rule over in the 20th century?",
        a: "Vietnam",
        b: "Laos",
        c: "Cambodia",
        d: "China",
        correct: "c",
    },
    {
        question: "14. What famous 5th century A.D conqueror was known as 'The Scourge of God?'",
        a: "Hannibal",
        b: "Julius Caeser",
        c: "William The Conqueror",
        d: "Attila The Hun",
        correct: "d",
    },
    {
        question: "15. In which year did India get independence from Britain?",
        a: "1944",
        b: "1945",
        c: "1946",
        d: "1947",
        correct: "d",
    },
    {
        question: "16. The ancient Egyptians used to sleep on pillows made of what?",
        a: "Stones",
        b: "Gold",
        c: "Cotton",
        d: "Iron",
        correct: "a",
    },
    {
        question: "17. Which famous US landmark did Martin Luther King Junior give his famous 'I have a dream' speech in front of?",
        a: "Lincoln Memorial",
        b: "The White House",
        c: "Mount Rushmore",
        d: "Statue of Liberty",
        correct: "a",
    },
    {
        question: "18. In which century did 10 Downing Street become the Prime Minister's residence?",
        a: "16th",
        b: "17th",
        c: "18th",
        d: "19th",
        correct: "c",
    },
    {
        question: "19. Which life-changing technology was launched in 1903?",
        a: "Cars",
        b: "Bikes",
        c: "Aeroplanes",
        d: "Trains",
        correct: "c",
    },
    {
        question: "20. Which Treaty ended World War I?",
        a: "The Treaty of Versailles",
        b: "The Treaty of Paris",
        c: "The Treaty of Strasbourg",
        d: "The Treaty of Rouen",
        correct: "a",
    },
    {
        question: "21. What were the surfaces of Egypt's ancient pyramids covered with?",
        a: "Gold",
        b: "Silver",
        c: "White Limestone",
        d: "Granite",
        correct: "c",
    },
    {
        question: "22. What was the street called where the Great Fire of London started?",
        a: "Baker Street",
        b: "Pudding Lane",
        c: "Regents Street",
        d: "Knights Square",
        correct: "b",
    },
    {
        question: "23. What came after the Bronze Age?",
        a: "Stone Age",
        b: "Iron Age",
        c: "Silver Age",
        d: "Industrial Age",
        correct: "b",
    },
    {
        question: "24. New York was known by a different name before 1664. What was that name?",
        a: "Old York",
        b: "Great York",
        c: "New Amsterdam",
        d: "Atlantic Harbour",
        correct: "c",
    },
    {
        question: "25. According to popular myth, who chased all the snakes out of Ireland?",
        a: "Saint Patrick",
        b: "Saint Owen",
        c: "Saint Brian",
        d: "Saint ODowda",
        correct: "a",
    }
];

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

    let currentQuizData = quizContent[currentQuiz]

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
        if (answer === quizContent[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if (currentQuiz < quizContent.length) {
            loadQuiz()
        } else {
            mainQuiz.innerHTML = `
            <h2>You answered ${score}/${quizContent.length} questions correctly</h2>
            
            <button onClick = "location.reload()">Reload</button>`
        }
    }
})