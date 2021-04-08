let amountOfCards = "";
const possibleCards = ["bob", "explode", "fiesta", "metal", "revertit", "triplets", "unicorn"]
let chosenCards = [];
let lastCard = "";
let lastParrot = "";
let blocked = false;
document.querySelector("#content").addEventListener('click', userClick);
askAmount();

function askAmount() {
    while (amountOfCards > 14 || amountOfCards < 4 || amountOfCards % 2 !== 0) {
        amountOfCards = parseInt(prompt("Com quantas cartas você deseja jogar?(Números pares de 2 a 14)"));
    }
    setCards();
}

function setCards() {
    randomizeCards();
    document.getElementById("content").innerHTML = "";
    for (let i = 0; i < amountOfCards; i++) {
        document.getElementById("content").innerHTML += `
    <li class="card ${chosenCards[i]}">
        <div class="front-face face"></div>
        <div class="back-face face"></div>
    </li>`
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
    const clickedCard = event.target.parentNode
    const clickedParrot = clickedCard.classList[1]
    if (clickedCard.classList[0] === "card" &&
        !clickedCard.classList.contains("flipped") &&
        blocked !== true) {
        clickedCard.classList.add("flipped");
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
            lastCard = "";
            lastParrot = "";
        }
    }
}