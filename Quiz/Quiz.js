const quizData = [
    {
        question: "Which HTML element is used to specify a footer for a document or section?",
        options: ["&lt;section-footer&gt;", "&lt;bottom&gt;", "&lt;footer&gt;", "&lt;end&gt;"],
        correct: 2
    },
    {
        question: "What is the correct way to specify a hyperlink that opens in a new tab?",
        options: [
            '&lt;a href="url" target="_blank"&gt;',
            '&lt;a href="url" target="new"&gt;',
            '&lt;a href="url" newtab&gt;',
            '&lt;a href="url" open="new"&gt;'
        ],
        correct: 0
    },
    {
        question: "Which HTML element is used to define important text?",
        options: ["&lt;bold&gt;", "&lt;strong&gt;", "&lt;important&gt;", "&lt;em&gt;"],
        correct: 1
    },
    {
        question: "Which attribute specifies an alternate text for an image if the image cannot be displayed?",
        options: ["description", "title", "src", "alt"],
        correct: 3
    },
    {
        question: "Which HTML tag is used to create an unordered list?",
        options: ["&lt;li&gt;", "&lt;ol&gt;", "&lt;ul&gt;", "&lt;list&gt;"],
        correct: 2
    },
    {
        question: "Which HTML element is used to create a line break?",
        options: ["&lt;br&gt;", "&lt;break&gt;", "&lt;lb&gt;", "&lt;newline&gt;"],
        correct: 0
    },
    {
        question: "Which HTML element is used to create a table row?",
        options: ["&lt;table&gt;", "&lt;td&gt;", "&lt;tr&gt;", "&lt;th&gt;"],
        correct: 2
    },
    {
        question: "Which HTML tag is used to create a dropdown list?",
        options: ["&lt;option&gt;", "&lt;dropdown&gt;", "&lt;list&gt;", "&lt;select&gt;"],
        correct: 3
    },
    {
        question: "Which of the following is the correct way to comment in HTML?",
        options: [
            "/* This is a comment */",
            "// This is a comment",
            "&lt;!-- This is a comment --&gt;",
            "&lt;comment&gt;This is a comment&lt;/comment&gt;"
        ],
        correct: 2
    },
    {
        question: "Which HTML element is used to display a scalar measurement within a range?",
        options: ["&lt;meter&gt;", "&lt;progress&gt;", "&lt;range&gt;", "&lt;value&gt;"],
        correct: 0
    }
];
let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft = 20;
function loadQuestion() {
    if (currentQuestion >= quizData.length) {
        document.getElementById("result").innerHTML = `Quiz Completed! 🎉 <br> Your Score: ${score}/${quizData.length} <br> <a href="/Home.html" class="btn">Return to Home</a>`;
        document.getElementById("question").style.display = "none";
        document.getElementById("options").style.display = "none";
        document.querySelector(".btn").style.display = "none";
        document.querySelector(".timer").style.display = "none";
        return;
    }
    const q = quizData[currentQuestion];
    document.getElementById("question").innerText = q.question;
    let optionsHtml = "";
    q.options.forEach((option, index) => {
        optionsHtml += `<label>
                <input type="radio" name="option" value="${index}">
                ${option}
            </label>`;
    });
    document.getElementById("options").innerHTML = optionsHtml;

    clearInterval(timer);
    timeLeft = 20;
    document.getElementById("time").innerText = timeLeft;
    timer = setInterval(countdown, 1000);
}

function countdown() {
    if (timeLeft <= 0) {
        clearInterval(timer);
        nextQuestion();
    } else {
        timeLeft--;
        document.getElementById("time").innerText = timeLeft;
    }
}

function nextQuestion() {
    clearInterval(timer);

    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        if (parseInt(selectedOption.value) === quizData[currentQuestion].correct) {
            score++;
        }
    }
    currentQuestion++;
    loadQuestion();
}
loadQuestion();