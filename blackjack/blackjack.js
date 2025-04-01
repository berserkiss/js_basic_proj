
let cardsArr = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let sumEl = document.querySelector("#sum-el")
let cards = document.querySelector("#cards-el")
let messageEl = document.getElementById("message-el")

let player = {
    name: "Ann",
    chips: 200
}

let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + " $" + player.chips

function getRandomCard() {
    let cardVar = Math.floor(Math.random() * 13) + 1

    if (cardVar > 10) {
        return 10
    } else if (cardVar === 1) {
        return 11
    }
    else {
        return cardVar
    }
}

function renderGame() {
    cards.textContent = "Cards: "
    for (let i = 0; i < cardsArr.length; i++) {
        cards.textContent += cardsArr[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    // 2. Display the message in the messageEl using messageEl.textContent
    messageEl.textContent = message
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cardsArr = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let cardVar = getRandomCard()
        sum += cardVar
        cardsArr.push(cardVar)
        renderGame()
    }
}