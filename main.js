function checkAnswer(button, option) {
    console.log("Button clicked:", button);
    console.log("Option selected:", option);

    const card = button.closest('.card');
    const correctAnswer = card.getAttribute('data-correct');
    console.log("Correct answer:", correctAnswer);

    const feedback = card.querySelector('.feedback');
    if (option === correctAnswer) {
        feedback.textContent = "Correct! 🟢";
        feedback.style.color = "green";
        score += 10;
    } else {
        feedback.textContent = "Incorrect! 🔴";
        feedback.style.color = "red";
    }
    document.getElementById('score').textContent = score;

    const buttons = card.querySelectorAll('.answers button');
    buttons.forEach(btn => btn.disabled = true);
}
