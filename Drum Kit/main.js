// Click event
document.querySelectorAll(".drum").forEach(button => {
    button.addEventListener("click", function () {
        let key = this.innerHTML;
        playSound(key);
        buttonAnimation(key);
    });
});

// Keyboard event
document.addEventListener("keydown", function (event) {
    playSound(event.key);
    buttonAnimation(event.key);
});

// Sound function
function playSound(key) {

    switch (key) {
        case "Y":
            new Audio("sounds/tom1.mp3").play();
            break;
        case "U":
            new Audio("sounds/tom2.mp3").play();
            break;
        case "K":
            new Audio("sounds/tom3.mp3").play();
            break;
        case "T":
            new Audio("sounds/tom4.mp3").play();
            break;
        case "H":
            new Audio("sounds/tom5.mp3").play();
            break;
        case "A":
            new Audio("sounds/snare.mp3").play();
            break;
        default:
            console.log(key);
    }
}

// Animation function
function buttonAnimation(key) {

    let activeButton = document.querySelector("." + key);

    if (activeButton) {
        activeButton.classList.add("pressed");

        setTimeout(() => {
            activeButton.classList.remove("pressed");
        }, 100);
    }
}