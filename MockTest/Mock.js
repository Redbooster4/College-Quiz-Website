const quizData = [{
    question: 'What is the correct syntax to print "Hello, World!" in C++?',
    options: ['Console.Write("Hello, World!");', 'print("Hello, World!");', 'cout << "Hello, World!";', 'echo "Hello, World!";'],
    correct: 2
    },{
    question: "Which data type is used to store a single character in C++?",
    options: ["char", "string", "int", "bool"],
    correct: 0
    },{
    question: "Which header file is used for input and output operations in C++?",
    options: ["#include &lt;stdio.h&gt;", "#include &lt;conio.h&gt;", "#include &lt;iostream&gt;", "#include &lt;stdlib.h&gt;"],
    correct: 2
    },{
    question: "Which operator is used for dynamic memory allocation in C++?",
    options: ["alloc()", "new", "malloc()", "calloc()"],
    correct: 1
    },{
    question: "Which of the following is used to define a function in C++?",
    options: ["function myFunction()", "void myFunction()", "define myFunction()", "func myFunction()"],
    correct: 1
    },{
    question: "What is the purpose of the return statement in a function?",
    options: ["It terminates the program", "It exits the function and returns a value", " It restarts the function", "It prints a value to the console"],
    correct: 1
    },{
    question: "What is a constructor in C++?",
    options: [" A function that initializes an object", "A function that is manually called to allocate memory", "A function that destroys objects", " A function that returns an integer"],
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
