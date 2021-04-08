let amountOfCards = 10;
const possibleCards = ["bob", "explode", "fiesta", "metal", "revertit", "triplets", "unicorn"]

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
    randomizeCards();
}

function randomizeCards() {
    let chosencards = possibleCards.sort(comparador).slice(0, amountOfCards / 2);
    chosencards = chosencards.concat(chosencards);
    chosencards = chosencards.sort(comparador);
    console.log(chosencards);
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