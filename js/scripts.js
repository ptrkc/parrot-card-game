let amountOfCards = 0;
let chosenCards = [];
let lastCard = "";
let lastParrot = "";
let blocked = false;
let totalMoves = 0;
let flippedCards = 0;
let gameStart = 0;
let seconds = 0;
let interval;
const possibleCards = ["bob", "explode", "fiesta", "metal", "revertit", "triplets", "unicorn"]
const stopwatch = document.getElementById('stopwatch');

document.querySelector("#content").addEventListener('click', userClick);

askAmount();

function askAmount() {
    while (amountOfCards > 14 || amountOfCards < 4 || amountOfCards % 2 !== 0) {
        amountOfCards = parseInt(prompt("Com quantas cartas você deseja jogar?(Números pares de 4 a 14)"));
    }
    setCards();
    startStopwatch();
}

function startStopwatch() {
    gameStart = Date.now();
    interval = setInterval(updateSeconds, 1000);
}

function updateSeconds() {
    seconds = Math.floor((Date.now() - gameStart) / 1000);
    stopwatch.innerHTML = seconds;
};

function stopStopwatch() {
    updateSeconds();
    clearInterval(interval);
}



function setCards() {
    randomizeCards();
    document.getElementById("content").innerHTML = "";
    for (let i = 0; i < amountOfCards; i++) {
        document.getElementById("content").innerHTML += `
    <li class="card ${chosenCards[i]}">
        <div class="front-face face"></div>
        <div class="back-face face"></div>
    </li>`;
    }
}
function randomizeCards() {
    chosenCards = possibleCards.sort(comparador).slice(0, amountOfCards / 2);
    chosenCards = chosenCards.concat(chosenCards);
    chosenCards = chosenCards.sort(comparador);
}

function comparador() {
    return Math.random() - 0.5;
}

function userClick(event) {
    const clickedCard = event.target.parentNode;
    const clickedParrot = clickedCard.classList[1]
    if (clickedCard.classList[0] === "card" &&
        !clickedCard.classList.contains("flipped") &&
        blocked !== true) {
        clickedCard.classList.add("flipped");
        totalMoves++
        if (lastCard === "") {
            lastCard = clickedCard;
            lastParrot = clickedParrot;
        } else if (clickedParrot !== lastParrot) {
            blocked = true;
            setTimeout(function () {
                blocked = false;
                clickedCard.classList.remove("flipped");
                lastCard.classList.remove("flipped");
                lastCard = "";
                lastParrot = "";
            }, 1000);
        } else {
            flippedCards = flippedCards + 2;
            lastCard = "";
            lastParrot = "";
        }
        if (flippedCards === amountOfCards) {
            gameOver();
        }
    }
}

function gameOver() {
    stopStopwatch();
    alert(`Você ganhou em ${totalMoves} jogadas e ${seconds} segundos!`);
    let validAnswer = false;
    while (validAnswer !== true) {
        playAgain = prompt("Você quer jogar novamente?(sim ou não)");
        if (playAgain === "sim" || playAgain === "s") {
            validAnswer = true;
            totalMoves = 0;
            flippedCards = 0;
            seconds = 0;
            stopwatch.innerHTML = "0";
            askAmount();
        } else if (playAgain === "não" || playAgain === "nao" || playAgain === "n") {
            validAnswer = true;
        }
    }
}