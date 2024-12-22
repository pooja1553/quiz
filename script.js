const quizData = [
    {
        question: " Which of the following tag is used to insert a line-break in HTML?",
        a: "<br>",
        b: "<a>",
        c: "<pre>",
        d: "<b>",
        correct: "a"
    },
    {
        question: "The correct sequence of HTML tags for starting a webpage is -",
        a: "Head, Title, HTML, body",
        b: "HTML, Body, Title, Head",
        c: "HTML, Title, Head, Body",
        d: "HTML, Head, Title, Body",
        correct: "d"
    },
    {
        question: "Which of the following element is responsible for making the text italic in HTML?",
        a: "<italic>",
        b: "<i>",
        c: "<it>",
        d: "<italice>n",
        correct: "b"
    },
    {
        question: "What is the correct syntax to write an HTML comment?",
        a: "//comment",
        b: "#comment",
        c: "<!--comment-->",
        d: "/*comment*/",
        correct: "c"
    },
    {
        question: "What is the full form of Html?",
        a: "Hyper Text Markup Language",
        b: "Hyper language",
        c: "Hypar Text Markup Language ",
        d: "Hyper ",
        correct: "a"
    },
    {
        question: "Which attribute is used to provide a unique name to an HTML element?",
        a: "id",
        b: "class",
        c: "type",
        d: "None of the above",
        correct: "a"
    },
    {
        question: " Which HTML tag is called the root element of an HTML document?",
        a: "<html>",
        b: "<body>",
        c: "<title>",
        d: "<head>",
        correct: "a"
    },
    {
        question: "Which of the following are examples of block-level elements in HTML?",
        a: "<div>",
        b: "<p>",
        c: "<h1>",
        d: "All of the above",
        correct: "d"
    },
    {
        question: "What is meant by an empty tag in HTML?",
        a: "There is no such concept of an empty tag in HTML",
        b: "An empty tag does not require a closing tag",
        c: "An empty tag cannot have any content within it",
        d: "None of the above",
        correct: "b"
    },
    {
        question: "Which of the following is the correct syntax for using the HTML style attribute?",
        a: "<tagname style = “property: value;”>",
        b: "<tagname style = “property;”>",
        c: "<tagname style >",
        d: "None of the above",
        correct: "a"

  }

];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
