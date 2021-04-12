'use strict'

let cQuestion = 0;
let questions = [
    {
        question: "HTL steht für",
        answers: [
            "Hier  total  leiwand",
            "Hurra  Technik  leben",
            "Hotels , Taxis , Lehrer",
            "Höhere  technische  Lehranstalt",
        ],
        correctAnswer: 1,
        userAnswer: -1,
    },
    {
        question: "Ich bin ...",
        answers: [
            "cool",
            "super cool",
            "mega cool",
            "der coolste",
        ],
        correctAnswer: 2,
        userAnswer: -1,
    },
    {
        question: "Ich bin nicht ...",
        answers: [
            "nice",
            "super nice",
            "mega nice",
            "der niceste",
        ],
        correctAnswer: 2,
        userAnswer: -1,
    },
    {
        question: "Ich war ...",
        answers: [
            "heiß",
            "super heiß",
            "mega heiß",
            "der heißeste",
        ],
        correctAnswer: 2,
        userAnswer: -1,
    },
];
let question = document.getElementById("question");
let answers = document.getElementById("answers");
let back = document.getElementById("back");
let next = document.getElementById("next");
let quiz = document.getElementById("quiz");
let resultTitle = document.getElementById("title");
let results = document.getElementById("results");

let getChecked = () => parseInt(document?.querySelector("input[type='radio']:checked")?.value ?? -1);
back.addEventListener("click", () => {
    questions[cQuestion].userAnswer = getChecked();
    cQuestion--;
    build();
});
next.addEventListener("click", () => {
    questions[cQuestion].userAnswer = getChecked();
    if (cQuestion === questions.length - 1) {
        finish();
        return;
    }
    cQuestion++;
    build();
});
quiz.addEventListener("click", () => {
    if (getChecked() !== -1) {
        next.disabled = false;
    }
});

function build() {
    question.innerHTML = questions[cQuestion].question;
    answers.innerHTML = "";
    for (let i = 0; i < questions[cQuestion].answers.length; i++) {
        let n = document.createElement("DIV");
        n.classList.add("m-2");
        n.classList.add("mt-3");
        n.innerHTML = `
        <div class="form-check">
             <input class="form-check-input" id=${"answer" + i} type="radio" value=${i} name="answer" ${i === questions[cQuestion].userAnswer ? "checked" : ""}/>
             <label class="form-check-label" for=${"answer" + i}>
                ${questions[cQuestion].answers[i]}
             </label>
        </div>
        `
        answers.appendChild(n);
    }
    back.disabled = cQuestion === 0;
    next.disabled = true;
    next.innerText = (cQuestion === questions.length - 1 ? "Finish" : "Continue");
}

function finish() {
    quiz.style.display = "none";
    let correctAnswers = 0;
    for (let i = 0; i < questions.length; i++) {
        if (questions[i].correctAnswer === questions[i].userAnswer) {
            correctAnswers++;
        }
    }
    resultTitle.innerText = `You've answered ${correctAnswers} out of ${questions.length} correctly`;
    resultTitle.style.color = `rgb(${255 - correctAnswers / questions.length * 255},${correctAnswers / questions.length * 255}, 0)`;

    for (let i = 0; i < questions.length; i++) {
        let n = document.createElement("DIV");
        n.classList.add("m-2");
        let temp = [];
        for (let j = 0; j < questions[i].answers.length; j++) {
            temp.push(`<p style=${"color:" + (j === questions[i].correctAnswer ? "green" : "") + (j === questions[i].userAnswer &&  questions[i].userAnswer !== questions[i].correctAnswer ? "red" : "")}>${questions[i].answers[j]}</p>`);
        }
        n.innerHTML = `
            <h3 id="question">
                ${questions[i].question}
            </h3>
        </div>
        ` +
            temp.join("");
        results.appendChild(n);
    }
}

build();

