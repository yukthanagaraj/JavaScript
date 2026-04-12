// // Player 1
// const randNumber1 = Math.floor(Math.random() * 6) + 1;
// console.log(randNumber1);

// const diceNumber= 'dice${randNumber1}.png';
// console.log(diceNumber);

// const diceImage = 'images/${diceNumber}';
// console.log(diceImage);

// const image = document.querySelector(".img1");

// image.setAttritube("src", diceImage);
    
    
//     // Player 2
//     const randNumber2 = Math.floor(Math.random() * 6) + 1;
// console.log(randNumber1);

// const diceNumber2= 'dice${randNumber2}.png.';
// console.log(diceNumber);

// const diceImage2 = 'images/${diceNumber2}';
// console.log(diceImage);

// const image2 = document.querySelector(".img2");

// image2.setAttritube("src", diceImage2);
    
//     // Winner
//     if (randomNumber1 > randomNumber2) {
//         document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
//     } else if (randomNumber2 > randomNumber1) {
//         document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
//     } else {
//         document.querySelector("h1").innerHTML = "Tie!";
//     }
function rollDice() {

    // Player 1
    const randNumber1 = Math.floor(Math.random() * 6) + 1;
    const diceImage1 = `images/dice${randNumber1}.png`;
    document.querySelector(".img1").setAttribute("src", diceImage1);

    // Player 2
    const randNumber2 = Math.floor(Math.random() * 6) + 1;
    const diceImage2 = `images/dice${randNumber2}.png`;
    document.querySelector(".img2").setAttribute("src", diceImage2);

    // Winner
    if (randNumber1 > randNumber2) {
        document.querySelector(".refresh-text").innerHTML = "🚩 Player 1 Wins!";
    } else if (randNumber2 > randNumber1) {
        document.querySelector(".refresh-text").innerHTML = "Player 2 Wins! 🚩";
    } else {
        document.querySelector(".refresh-text").innerHTML = "Draw!";
    }
}

// Optional: auto roll on page load
window.onload = rollDice;