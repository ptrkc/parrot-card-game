let amountOfCards = 10;
document.querySelector("#content").addEventListener('click', userClick);
askAmount();

function askAmount() {
    while (amountOfCards > 14 || amountOfCards < 4 || amountOfCards % 2 !== 0) {
        amountOfCards = parseInt(prompt("Com quantas cartas você deseja jogar?"));
    }
    setCards();
}

function setCards() {
    for (let i = 0; i < 14 - amountOfCards; i++) {
        document.querySelector(".card").remove()
    }
}

function userClick(event) {
    const clickedCard = event.target.parentNode
    if (clickedCard.classList.value === "card") {
        clickedCard.classList.toggle("flipped");
    } else {
        console.log("nope");
    }
}