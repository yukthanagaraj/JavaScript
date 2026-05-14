const paragraph = document.getElementById("paragraph").innerText;
const inputField = document.getElementById("input");
const timeElement = document.getElementById("time");
const wpmElement = document.getElementById("wpm");
const accuracyElement = document.getElementById("accuracy");
const restartBtn = document.getElementById("restart");

let timeLeft = 60;
let timer;
let isTyping = false;

inputField.addEventListener("input", startTest);

function startTest() {

    if (!isTyping) {
        timer = setInterval(updateTimer, 1000);
        isTyping = true;
    }

    calculateResults();
}

function updateTimer() {

    if (timeLeft > 0) {
        timeLeft--;
        timeElement.innerText = timeLeft;
    } else {
        clearInterval(timer);
        inputField.disabled = true;
    }
}

function calculateResults() {

    let typedText = inputField.value;

    let wordsTyped = typedText.trim().split(/\s+/).length;

    let wpm = Math.round(wordsTyped * (60 / (60 - timeLeft || 1)));

    wpmElement.innerText = wpm;

    let correctChars = 0;

    for (let i = 0; i < typedText.length; i++) {
        if (typedText[i] === paragraph[i]) {
            correctChars++;
        }
    }

    let accuracy = Math.round((correctChars / typedText.length) * 100) || 0;

    accuracyElement.innerText = accuracy;
}

restartBtn.addEventListener("click", () => {

    clearInterval(timer);

    timeLeft = 60;
    isTyping = false;

    inputField.value = "";
    inputField.disabled = false;

    timeElement.innerText = timeLeft;
    wpmElement.innerText = 0;
    accuracyElement.innerText = 0;
});