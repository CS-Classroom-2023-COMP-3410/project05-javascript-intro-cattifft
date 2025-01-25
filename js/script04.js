const quizContent = document.getElementById('quiz-content');
const nextBtn = document.getElementById('next-btn');

const questions = [
    {
        question: "Who was the first President of the United States?",
        options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"],
        correct: 1,
        feedback: "George Washington served as the first President from 1789 to 1797."
    },
    {
        question: "In what year did World War II end?",
        options: ["1942", "1945", "1950", "1939"],
        correct: 1,
        feedback: "World War II ended in 1945 with the surrender of Germany and Japan."
    },
    {
        question: "What was the primary cause of the American Civil War?",
        options: ["Slavery", "Taxation", "Territorial Expansion", "Trade Disputes"],
        correct: 0,
        feedback: "The primary cause of the American Civil War was the issue of slavery."
    }
];

let currentQuestionIndex = 0;
let score = 0;
let userResponses = [];

function displayQuestion(index) {
    const question = questions[index];
    quizContent.innerHTML = `
        <h2>${question.question}</h2>
        <div>
            ${question.options
                .map(
                    (option, i) => `
                <label>
                    <input type="radio" name="answer" value="${i}">
                    ${option}
                </label><br>
            `
                )
                .join('')}
        </div>
    `;
    nextBtn.textContent = index === questions.length - 1 ? "Finish" : "Next";
}

function handleNext() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) {
        alert("Please select an answer.");
        return;
    }

    const userAnswer = parseInt(selectedOption.value);
    const currentQuestion = questions[currentQuestionIndex];

    userResponses.push({
        question: currentQuestion.question,
        correct: currentQuestion.options[currentQuestion.correct],
        userAnswer: currentQuestion.options[userAnswer],
        isCorrect: userAnswer === currentQuestion.correct,
        feedback: currentQuestion.feedback
    });

    if (userAnswer === currentQuestion.correct) {
        score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion(currentQuestionIndex);
    } else {
        displaySummary();
    }
}

function displaySummary() {
    quizContent.innerHTML = `
        <h2>Quiz Completed!</h2>
        <p>Your Score: ${score} / ${questions.length}</p>
        <h3>Review:</h3>
        <ul>
            ${userResponses
                .map(
                    (response, i) => `
                <li>
                    <strong>Q${i + 1}: ${response.question}</strong><br>
                    Your Answer: ${response.userAnswer} <br>
                    Correct Answer: ${response.correct} <br>
                    ${response.isCorrect ? "Correct!" : "Incorrect."} <br>
                    <small>${response.feedback}</small>
                </li>
            `
                )
                .join('')}
        </ul>
    `;
    nextBtn.style.display = 'none';
}

// Initialize quiz
displayQuestion(currentQuestionIndex);

// Event listener for Next button
nextBtn.addEventListener('click', handleNext);
