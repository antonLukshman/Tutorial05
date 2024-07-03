const questions = [
    { question: "5 x 6", answer: 30 },
    { question: "16 - 7", answer: 9 },
    { question: "45 + 50", answer: 95 },
    { question: "18 / 6", answer: 3 },
    { question: "8 + 7", answer: 15 },
    { question: "14 - 4", answer: 10 },
    { question: "5 x 5", answer: 25 },
    { question: "35 / 7", answer: 35 },
    { question: "7 + 8", answer: 15 },
    { question: "10 - 3", answer: 7 }
];

let correctAnswersCount = 0;

questions.forEach((q, index) => {
    let userAnswer = prompt(`${q.question} = ?`);
    userAnswer = parseInt(userAnswer, 10);

    const questionSpan = document.getElementById(`question${index + 1}`);
    const answerSpan = document.getElementById(`answer${index + 1}`);
    const feedbackSpan = document.getElementById(`feedback${index + 1}`);

    questionSpan.innerHTML = q.question;
    answerSpan.innerHTML = userAnswer;

    if (userAnswer === q.answer) {
        feedbackSpan.innerHTML = `Correct! &checkmark;`;
        feedbackSpan.classList.add("correct");
        correctAnswersCount++;
    } else {
        feedbackSpan.innerHTML = `Incorrect! &cross; The correct answer is ${q.answer}`;
        feedbackSpan.classList.add("incorrect");
    }
});

const scoreSpan = document.getElementById("score");
scoreSpan.innerHTML = `${correctAnswersCount * 10}`;