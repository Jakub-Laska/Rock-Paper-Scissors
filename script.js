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
    
    setTimeout(showGameHard, 4000);
}
// easy game mode
let gameInterface = document.querySelector('#game');

function showGameEasy() {
    loadingScreen.style.display = 'none';
    gameInterface.style.display = 'flex';
}

// get players choice
// which card player chose and save that choice
// queryselectorALL player cards then arrow function foreach addeventlistener click getplayerchoice function
let playerCard = document.querySelectorAll('.player')
let playerChoice; 
function getPlayerChoice() {
    if (playerCard.innerHTML === rock) {
        playerChoice = 'rock';
    } else if (playerCard.innerHTML === paper) {
        playerChoice = 'paper';
    } else {
        playerChoice = 'scissors';
    }
    }
console.log(playerChoice);

// initialize bot animation
// math random bot choice
// create game logic what beats what and draws
// check who wins
// show message who wins
// increment round counter, win counter
// show final screen after bo5