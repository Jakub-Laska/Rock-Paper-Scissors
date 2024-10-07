let startBtn = document.querySelector('.startBtn');
let easyBtn = document.querySelector('.easyBtn');
let hardBtn = document.querySelector('.hardBtn');
let backBtn = document.querySelector('.goBack');
let gameInfo = document.querySelector('#gameInfo');
let nameInfo = document.querySelector('#nameInfo');


//menu function responsible for showing buttons
startBtn.addEventListener('click', showBtn);
function showBtn() {

    easyBtn.style.display = 'block';
    hardBtn.style.display = 'block';
    backBtn.style.display = 'block';
    nameInfo.style.display = 'block';
    startBtn.style.display = 'none';
    gameInfo.style.display = 'none';
    
}
//menu function responsible for hiding buttons
backBtn.addEventListener('click', hideBtn);
function hideBtn() {
    easyBtn.style.display = 'none';
    hardBtn.style.display = 'none';
    backBtn.style.display = 'none';
    nameInfo.style.display = 'none';
    startBtn.style.display = 'block';
    gameInfo.style.display = 'block';
}
//functions responsible for showing description of the game modes
let easyInfo = document.querySelector('.easyInfo');

easyBtn.addEventListener('mouseenter', showEasyInfo);
easyBtn.addEventListener('mouseleave', hideEasyInfo);

function showEasyInfo() {
    easyInfo.style.display = 'block';
}
function hideEasyInfo() {
    easyInfo.style.display = 'none';
}

let hardInfo = document.querySelector('.hardInfo');

hardBtn.addEventListener('mouseenter', showHardInfo);
hardBtn.addEventListener('mouseleave', hideHardInfo);

function showHardInfo() {
    hardInfo.style.display = 'block';
}
function hideHardInfo() {
    hardInfo.style.display = 'none';
}
//loading screen for easy and hard mode
let loadingScreen = document.querySelector('#loading')

easyBtn.addEventListener('click', showLoadingEasy);

function showLoadingEasy() {
    let menu = document.querySelector('#menu');
    
    menu.style.display = 'none';
    loadingScreen.style.display = 'flex';
    
    setTimeout(showGameEasy, 3000);
}

hardBtn.addEventListener('click', showLoadingHard);

function showLoadingHard() {
    let menu = document.querySelector('#menu');
    let loadingScreen = document.querySelector('#loading')
    
    menu.style.display = 'none';
    loadingScreen.style.display = 'block';
    
    setTimeout(showGameHard, 3000);
}
// easy game mode
let gameInterface = document.querySelector('#game');

function showGameEasy() {
    loadingScreen.style.display = 'none';
    gameInterface.style.display = 'flex';
}
// function which gets player's choice
let rockCard = document.querySelector('#playerRock');
let paperCard = document.querySelector('#playerPaper');
let scissorsCard = document.querySelector('#playerScissors');
let rockCardBot = document.querySelector('#botRock');
let paperCardBot = document.querySelector('#botPaper');
let scissorsCardBot = document.querySelector('#botScissors');
const playerCards = [rockCard, paperCard, scissorsCard];
let playerChoice;
rockCard.addEventListener('click', rockChoice);
paperCard.addEventListener('click', paperChoice);
scissorsCard.addEventListener('click', scissorsChoice);
function rockChoice() {
    playerChoice = 'rock';
    console.log(playerChoice);
    getRandomChoice();
    hideOtherCards();
}
function paperChoice() {
    playerChoice = 'paper';
    console.log(playerChoice);
    getRandomChoice();
    hideOtherCards();
}
function scissorsChoice() {
    playerChoice = 'scissors';
    console.log(playerChoice);
    getRandomChoice();
    hideOtherCards();
}
// hides not selected cards
function hideOtherCards() {
    if (playerChoice == 'rock') {
        paperCard.style.display = 'none';
        scissorsCard.style.display = 'none';
    } else if (playerChoice == 'paper') {
        rockCard.style.display = 'none';
        scissorsCard.style.display = 'none';
    } else {
        paperCard.style.display = 'none';
        rockCard.style.display = 'none';
    }
}
// function generating random number between 1, 2, 3
let randomChoice;
function getRandomChoice() {
    const numbers = [1, 2, 3];
    const randomIndex = Math.floor(Math.random() * 3);
    randomChoice = numbers[randomIndex];
    console.log(randomChoice);
    getBotChoice();
}
// hides bot cards which were not picked
function hideBotCards() {
    if (botChoice == 'rock') {
        paperCardBot.style.display = 'none';
        scissorsCardBot.style.display = 'none';
    } else if (botChoice == 'paper') {
        rockCardBot.style.display = 'none';
        scissorsCardBot.style.display = 'none';
    } else {
        paperCardBot.style.display = 'none';
        rockCardBot.style.display = 'none';
    }
}
// function disable eventlisteners and hover
function disableListeners() {
    rockCard.removeEventListener('click', rockChoice);
    paperCard.removeEventListener('click', paperChoice);
    scissorsCard.removeEventListener('click', scissorsChoice);
    playerCards.forEach(element => {
        element.classList.toggle('disableHover');
    });
}
// function which determines the choice of a bot
let botChoice;
function getBotChoice() {
    if (randomChoice == 1) {
        botChoice = 'rock';
    } else if (randomChoice == 2) {
        botChoice = 'paper';
    } else {
        botChoice = 'scissors'
    }
    console.log(botChoice);
    hideBotCards();
    disableListeners();
    gameOutcome();
}
// function for the outcome
let outcome;
function gameOutcome() {
    if (playerChoice == 'rock' && botChoice == 'scissors' || playerChoice == 'paper' && botChoice == 'rock' || playerChoice == 'scissors' && botChoice == 'paper') {
        outcome = 'win';
    } else if (playerChoice == botChoice) {
        outcome = 'draw'
    } else {
        outcome = 'lose'
    }
    console.log(outcome);
}


// check who wins
// show message who wins
// increment round counter, win counter
// show final screen after bo5