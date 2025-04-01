let game = ["rock", "scissors", "paper"]

function getHand()
{
    let i = Math.floor(Math.random() * 3)
    return game[i]
}

console.log(getHand())