let amountOfCards = 0;

while (amountOfCards > 14 || amountOfCards < 4 || amountOfCards % 2 !== 0) {
    askAmount()
}
function askAmount() {
    amountOfCards = prompt("Com quantas cartas você deseja jogar?");
}