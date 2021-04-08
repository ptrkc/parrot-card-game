let amountOfCards = 10;
const possibleCards = ["bob", "explode", "fiesta", "metal", "revertit", "triplets", "unicorn"]
let chosenCards = [];
document.querySelector("#content").addEventListener('click', userClick);
askAmount();

function askAmount() {
    while (amountOfCards > 14 || amountOfCards < 4 || amountOfCards % 2 !== 0) {
        amountOfCards = parseInt(prompt("Com quantas cartas você deseja jogar?"));
    }
    setAmountOfCards();
}

function setAmountOfCards() {
    for (let i = 0; i < 14 - amountOfCards; i++) {
        document.querySelector(".card").remove()
    }
    randomizeCards();
    setCardType();
}

function setCardType() {
    const cardList = document.querySelectorAll(".card")
    for (let i = 0; i < cardList.length; i++) {
        cardList[i].classList.add(chosenCards[i]);
    }
}

function randomizeCards() {
    chosenCards = possibleCards.sort(comparador).slice(0, amountOfCards / 2);
    chosenCards = chosenCards.concat(chosenCards);
    chosenCards = chosenCards.sort(comparador);
    console.log(chosenCards);
}

function comparador() {
    return Math.random() - 0.5;
}

function userClick(event) {
    const clickedCard = event.target.parentNode
    if (clickedCard.classList[0] === "card" && !clickedCard.classList.contains("flipped")) {
        clickedCard.classList.add("flipped");
    } else {
        console.log("nope");
    }
}