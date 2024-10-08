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
    
    setTimeout(showGameEasy, 100);
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
    getRandomChoice();
    hideOtherCards();
}
function paperChoice() {
    playerChoice = 'paper';
    getRandomChoice();
    hideOtherCards();
}
function scissorsChoice() {
    playerChoice = 'scissors';
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
function enableListeners() {
    playerCards.forEach(element => {
        element.classList.toggle('disableHover');
    });
    rockCard.addEventListener('click', rockChoice);
    paperCard.addEventListener('click', paperChoice);
    scissorsCard.addEventListener('click', scissorsChoice);
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
    hideBotCards();
    disableListeners();
    getGameOutcome();
}
// function for the outcome
let outcome;
function getGameOutcome() {
    roundCounter++;
    if (playerChoice == 'rock' && botChoice == 'scissors' || playerChoice == 'paper' && botChoice == 'rock' || playerChoice == 'scissors' && botChoice == 'paper') {
        outcome = 'win';
        playerW++;
    } else if (playerChoice == botChoice) {
        outcome = 'draw'
    } else {
        outcome = 'lose'
        botW++;
    }
    setTimeout(checkRound, 600);
}
// checks if the game has ended 
function checkRound() {
    if (playerW == 3) {


    } else if (botW == 3) {

    } else {
        showPostRoundScreen();
    }
}
// post round screen function
let winScreenMessage = document.querySelector('#winScreenMessage')
let winScreen = document.querySelector('#winScreen');
let roundCounter = '0';
let rounds = document.querySelector('#rounds');
let playerWins = document.querySelector('#playerWins');
let playerW = '0';
let botWins = document.querySelector('#botWins')
let botW = '0';

function showPostRoundScreen() {
        winScreen.style.display = 'flex';
        if (outcome == 'win'){
            winScreenMessage.innerHTML = 'You Won';
            winScreenMessage.style.color = '#00ad00'
        } else if (outcome == 'lose') {
            winScreenMessage.innerHTML = 'You lost';
            winScreenMessage.style.color = 'red'
        } else {
            winScreenMessage.innerHTML = 'It is a draw';
            winScreenMessage.style.color = 'white'
        }
        rounds.innerHTML = `round counter: ${roundCounter}`;
        playerWins.innerHTML = `player wins: ${playerW}`
        botWins.innerHTML = `bot wins: ${botW}`
        console.log(playerW);
        console.log(botW);
}

//winScreen menu button
let menuBtn = document.querySelector('#winScreenMenuBtn')
menuBtn.addEventListener('click', menuConfirmBtn);

function menuConfirmBtn() {
    menuBtn.innerHTML = 'are you sure?'
    menuBtn.style.fontSize = '1.1rem';
    menuBtn.addEventListener('click', goToMenu);
}
function goToMenu() {
    winScreen.style.display = 'none';
    gameInterface.style.display = 'none';
    menu.style.display = 'flex';
    menuBtn.innerHTML = 'menu';
    menuBtn.style.fontSize = '1rem';
    menuBtn.removeEventListener('click', goToMenu);
    gameReset();
}
// function for a total game reset
function gameReset() {
    roundCounter = '0';
    playerW = '0';
    botW = '0';
    rounds.innerHTML = `round counter: ${roundCounter}`;
    playerWins.innerHTML = `player wins: ${playerW}`
    botWins.innerHTML = `bot wins: ${botW}`
    paperCard.style.display = 'flex';
    scissorsCard.style.display = 'flex';
    rockCard.style.display = 'flex';
    paperCardBot.style.display = 'flex';
    scissorsCardBot.style.display = 'flex';
    rockCardBot.style.display = 'flex';
    menuBtn.innerHTML = 'menu';
    menuBtn.removeEventListener('click', goToMenu);
    enableListeners();
    hideBtn();
}
// win screen next round btn
let nextRoundBtn = document.querySelector('#winScreenAgainBtn')
nextRoundBtn.addEventListener('click', nextRound);

function nextRound() {
    winScreen.style.display = 'none';
    paperCard.style.display = 'flex';
    scissorsCard.style.display = 'flex';
    rockCard.style.display = 'flex';
    paperCardBot.style.display = 'flex';
    scissorsCardBot.style.display = 'flex';
    rockCardBot.style.display = 'flex';
    menuBtn.innerHTML = 'menu';
    menuBtn.removeEventListener('click', goToMenu);
    enableListeners();
}

// congratulations you've won here is your reward click to redeem! and then some kind of a funny cat or smth // and then go back to menu btn
// Robot won but don't worry you will get him next time here is your consolation prize click to redeem! // and then go back to menu

// change theme button for a darker more calm one
// change gameinterface letters
// change win screen
// designed by freepik make it a question mark hover 
// ask zuza for a logo
// change loading screen
// add hardmode with different messages and "rewards"
// add function for calling functions
// make it work on mobile
// tidy up
// add read more anchor with another page full of rock paper scissors history
// update readme and publish