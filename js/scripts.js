let amountOfCards = 14;

while (amountOfCards > 14 || amountOfCards < 4 || amountOfCards % 2 !== 0) {
    askAmount()
}
function askAmount() {
    amountOfCards = prompt("Com quantas cartas você deseja jogar?");
}

const cardsList = document.querySelectorAll(".card")
document.querySelector("#content").addEventListener('click', userClick);

function userClick(event) {
    const clickedCard = event.target.parentNode
    if (clickedCard.classList.value === "card") {
        clickedCard.classList.toggle("flipped")
    } else {
        console.log("nope")
    }
}


document.querySelector("#content")