//TODO: add 'player' as name if there is no name entered ✅
//TODO: make the money do something - new card without losing += 10, start with: 50, win blackjack += 500, lose = 0
//TODO: Save the amount of wins and losses so Player can keep track of their stats


//*Let's name our player
let player = {
    name: "",
    chips: 200
}

//*If our player doesn't put in a name or presses cancel, it will return "Player" as our name
player.name = prompt('What is your name?')

 if (player.name === "" || player.name === null){
     player.name = 'Player'
 } else {
 player.name
 }

 //A bunch of global variables, I know better now
 //*All the variables we will need for Blackjack to function
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"

    } else if (sum === 21) {
        message = "You've got Blackjack! Start new game to continue!"
        hasBlackJack = true
        
    } else {
        message = "You're out of the game! Click start a new game to continue!"
        isAlive = false
        
    }
    messageEl.textContent = message
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}