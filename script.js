let startBtn = document.querySelector(".startBtn");
let easyBtn = document.querySelector(".easyBtn");
let hardBtn = document.querySelector(".hardBtn");
let backBtn = document.querySelector(".goBack");
let gameInfo = document.querySelector("#gameInfo");
let nameInfo = document.querySelector("#nameInfo");

//menu function responsible for showing buttons
startBtn.addEventListener("click", showBtn);
function showBtn() {
  easyBtn.style.display = "block";
  hardBtn.style.display = "block";
  backBtn.style.display = "block";
  nameInfo.style.display = "block";
  startBtn.style.display = "none";
  gameInfo.style.display = "none";
}
//menu function responsible for hiding buttons
backBtn.addEventListener("click", hideBtn);
function hideBtn() {
  easyBtn.style.display = "none";
  hardBtn.style.display = "none";
  backBtn.style.display = "none";
  nameInfo.style.display = "none";
  startBtn.style.display = "block";
  gameInfo.style.display = "block";
}
//functions responsible for showing description of the game modes
let easyInfo = document.querySelector(".easyInfo");

easyBtn.addEventListener("mouseenter", showEasyInfo);
easyBtn.addEventListener("mouseleave", hideEasyInfo);

function showEasyInfo() {
  easyInfo.style.display = "block";
}
function hideEasyInfo() {
  easyInfo.style.display = "none";
}

let hardInfo = document.querySelector(".hardInfo");

hardBtn.addEventListener("mouseenter", showHardInfo);
hardBtn.addEventListener("mouseleave", hideHardInfo);

function showHardInfo() {
  hardInfo.style.display = "block";
}
function hideHardInfo() {
  hardInfo.style.display = "none";
}
//loading screen for easy and hard mode
let loadingScreen = document.querySelector("#loading");
let menu = document.querySelector("#menu");
let whichMode;

easyBtn.addEventListener("click", showLoadingEasy);
function showLoadingEasy() {
  menu.style.display = "none";
  loadingScreen.style.display = "flex";
  setTimeout(showGameEasy, 2000);
  whichMode = 0;
}

hardBtn.addEventListener("click", showLoadingHard);
function showLoadingHard() {
  menu.style.display = "none";
  loadingScreen.style.display = "flex";
  setTimeout(showGameHard, 2000);
  whichMode = 1;
}
// easy game mode
let gameInterface = document.querySelector("#game");

function showGameEasy() {
  loadingScreen.style.display = "none";
  gameInterface.style.display = "flex";
}
// hard game mode
function showGameHard() {
  loadingScreen.style.display = "none";
  gameInterface.style.display = "flex";
}
// function which gets player's choice
let rockCard = document.querySelector("#playerRock");
let paperCard = document.querySelector("#playerPaper");
let scissorsCard = document.querySelector("#playerScissors");
let rockCardBot = document.querySelector("#botRock");
let paperCardBot = document.querySelector("#botPaper");
let scissorsCardBot = document.querySelector("#botScissors");
const playerCards = [rockCard, paperCard, scissorsCard];
let playerChoice;

rockCard.addEventListener("click", rockChoice);
paperCard.addEventListener("click", paperChoice);
scissorsCard.addEventListener("click", scissorsChoice);

function rockChoice() {
  playerChoice = "rock";
  getRandomChoiceMode();
  hideOtherCards();
}
function paperChoice() {
  playerChoice = "paper";
  getRandomChoiceMode();
  hideOtherCards();
}
function scissorsChoice() {
  playerChoice = "scissors";
  getRandomChoiceMode();
  hideOtherCards();
}

function getRandomChoiceMode() {
  if (whichMode == 0) {
    getRandomChoice();
  } else {
    getRandomHardChoice();
  }
}
let randomHardChoice;
function getRandomHardChoice() {
  const numbersHard = [1, 2];
  const randomHardIndex = Math.floor(Math.random() * 2);
  randomHardChoice = numbersHard[randomHardIndex];
  getBotHardChoice();
}
let botHardChoice;
function getBotHardChoice() {
  if (playerChoice == "rock") {
    if (randomHardChoice == 1) {
      botChoice = "paper";
    } else {
      botChoice = "scissors";
    }
  } else if (playerChoice == "paper") {
    if (randomHardChoice == 1) {
      botChoice = "scissors";
    } else {
      botChoice = "rock";
    }
  } else {
    if (randomHardChoice == 1) {
      botChoice = "rock";
    } else {
      botChoice = "paper";
    }
  }
  hideBotCards();
  disableListeners();
  getGameOutcome();
}
// function which determines the choice of a bot
let botChoice;
function getBotChoice() {
  if (randomChoice == 1) {
    botChoice = "rock";
  } else if (randomChoice == 2) {
    botChoice = "paper";
  } else {
    botChoice = "scissors";
  }
  hideBotCards();
  disableListeners();
  getGameOutcome();
}

// hides not selected cards
function hideOtherCards() {
  if (playerChoice == "rock") {
    paperCard.style.display = "none";
    scissorsCard.style.display = "none";
  } else if (playerChoice == "paper") {
    rockCard.style.display = "none";
    scissorsCard.style.display = "none";
  } else {
    paperCard.style.display = "none";
    rockCard.style.display = "none";
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
  if (botChoice == "rock") {
    paperCardBot.style.display = "none";
    scissorsCardBot.style.display = "none";
  } else if (botChoice == "paper") {
    rockCardBot.style.display = "none";
    scissorsCardBot.style.display = "none";
  } else {
    paperCardBot.style.display = "none";
    rockCardBot.style.display = "none";
  }
}
// function disable eventlisteners and hover
function disableListeners() {
  rockCard.removeEventListener("click", rockChoice);
  paperCard.removeEventListener("click", paperChoice);
  scissorsCard.removeEventListener("click", scissorsChoice);
  playerCards.forEach((element) => {
    element.classList.toggle("disableHover");
  });
}
function enableListeners() {
  playerCards.forEach((element) => {
    element.classList.toggle("disableHover");
  });
  rockCard.addEventListener("click", rockChoice);
  paperCard.addEventListener("click", paperChoice);
  scissorsCard.addEventListener("click", scissorsChoice);
}

// function for the outcome
let outcome;
function getGameOutcome() {
  roundCounter++;
  if (
    (playerChoice == "rock" && botChoice == "scissors") ||
    (playerChoice == "paper" && botChoice == "rock") ||
    (playerChoice == "scissors" && botChoice == "paper")
  ) {
    outcome = "win";
    playerW++;
  } else if (playerChoice == botChoice) {
    outcome = "draw";
  } else {
    outcome = "lose";
    botW++;
  }
  setTimeout(checkRound, 600);
}
// checks if the game has ended
function checkRound() {
  if (playerW == 3) {
    if (whichMode == 0) {
      setTimeout(showWinScreenEasy, 400);
    } else {
      setTimeout(showWinScreenHard, 400);
    }
  } else if (botW == 3) {
    if (whichMode == 0) {
      setTimeout(showLoseScreenEasy, 400);
    } else {
      setTimeout(showLoseScreenHard, 400);
    }
  } else {
    setTimeout(showPostRoundScreen, 400);
  }
}
//win and lose screen functions
let endGameScreen = document.querySelector("#endGameScreen");
let endGameMessage = document.querySelector("#endGameMessage");
let endGamePara = document.querySelector(".endGamePare");
function showWinScreenEasy() {
  endGameMessage.innerHTML = "congratulations you have won";
  endGamePara.innerHTML = "also try your luck in hard mode";
  endGameScreen.style.display = "flex";
  endGamePrizeEasyWinBtn.style.display = "flex";
  endGamePrizeEasyLoseBtn.style.display = "none";
}
function showLoseScreenEasy() {
  endGameMessage.innerHTML =
    "Robot won but do not worry you will get him next time";
  endGamePara.innerHTML = "also try your luck in hard mode";
  endGameScreen.style.display = "flex";
  endGamePrizeEasyLoseBtn.style.display = "flex";
  endGamePrizeEasyWinBtn.style.display = "none";
}
function showWinScreenHard() {
  endGameMessage.innerHTML = "Nice luck, even hard mode is easy for you";
  endGamePara.innerHTML = "also try your luck in easy mode";
  endGameScreen.style.display = "flex";
  endGamePrizeEasyWinBtn.style.display = "flex";
  endGamePrizeEasyLoseBtn.style.display = "none";
}
function showLoseScreenHard() {
  endGameMessage.innerHTML = "You will get him next time";
  endGamePara.innerHTML = "also try your luck in easy mode";
  endGameScreen.style.display = "flex";
  endGamePrizeEasyWinBtn.style.display = "flex";
  endGamePrizeEasyLoseBtn.style.display = "none";
}
// post round screen function
let winScreenMessage = document.querySelector("#winScreenMessage");
let winScreen = document.querySelector("#winScreen");
let roundCounter = "0";
let rounds = document.querySelector("#rounds");
let playerWins = document.querySelector("#playerWins");
let playerW = "0";
let botWins = document.querySelector("#botWins");
let botW = "0";

function showPostRoundScreen() {
  winScreen.style.display = "flex";
  if (outcome == "win") {
    winScreenMessage.innerHTML = "You Won";
    winScreenMessage.style.color = "#00ad00";
  } else if (outcome == "lose") {
    winScreenMessage.innerHTML = "You lost";
    winScreenMessage.style.color = "red";
  } else {
    winScreenMessage.innerHTML = "It is a draw";
    winScreenMessage.style.color = "white";
  }
  rounds.innerHTML = `round counter: ${roundCounter}`;
  playerWins.innerHTML = `player wins: ${playerW}`;
  botWins.innerHTML = `bot wins: ${botW}`;
  console.log(playerW);
  console.log(botW);
}

//winScreen menu button
let menuBtn = document.querySelector("#winScreenMenuBtn");
let endGameMenuBtn = document.querySelector("#endGameMenuBtn");
let easyPrizeMenuBtn = document.querySelector("#easyPrizeMenuBtn");
menuBtn.addEventListener("click", menuConfirmBtn);
endGameMenuBtn.addEventListener("click", menuConfirmBtn);
easyPrizeMenuBtn.addEventListener("click", goToMenu);

function menuConfirmBtn() {
  menuBtn.innerHTML = "are you sure?";
  endGameMenuBtn.innerHTML = "are you sure?";
  menuBtn.style.fontSize = "1.1rem";
  endGameMenuBtn.style.fontSize = "1.1rem";
  menuBtn.addEventListener("click", goToMenu);
  endGameMenuBtn.addEventListener("click", goToMenu);
}
function goToMenu() {
  winScreen.style.display = "none";
  gameInterface.style.display = "none";
  easyPrizeWinVideo.style.display = "none";
  easyPrizeMenuBtn.style.display = "none";
  menu.style.display = "flex";
  menuBtn.innerHTML = "menu";
  endGameMenuBtn.innerHTML = "menu";
  menuBtn.style.fontSize = "1rem";
  endGameMenuBtn.style.fontSize = "1rem";
  menuBtn.removeEventListener("click", goToMenu);
  endGameMenuBtn.removeEventListener("click", goToMenu);
  gameReset();
}
// function for a total game reset
function gameReset() {
  roundCounter = "0";
  playerW = "0";
  botW = "0";
  rounds.innerHTML = `round counter: ${roundCounter}`;
  playerWins.innerHTML = `player wins: ${playerW}`;
  botWins.innerHTML = `bot wins: ${botW}`;
  paperCard.style.display = "flex";
  scissorsCard.style.display = "flex";
  rockCard.style.display = "flex";
  paperCardBot.style.display = "flex";
  scissorsCardBot.style.display = "flex";
  rockCardBot.style.display = "flex";
  menuBtn.innerHTML = "menu";
  menuBtn.removeEventListener("click", goToMenu);
  endGameScreen.style.display = "none";
  enableListeners();
  hideBtn();
}
// win screen next round btn
let nextRoundBtn = document.querySelector("#winScreenAgainBtn");
nextRoundBtn.addEventListener("click", nextRound);

function nextRound() {
  winScreen.style.display = "none";
  paperCard.style.display = "flex";
  scissorsCard.style.display = "flex";
  rockCard.style.display = "flex";
  paperCardBot.style.display = "flex";
  scissorsCardBot.style.display = "flex";
  rockCardBot.style.display = "flex";
  menuBtn.innerHTML = "menu";
  menuBtn.removeEventListener("click", goToMenu);
  enableListeners();
}
// prize btn
let endGamePrizeEasyWinBtn = document.querySelector("#endGamePrizeBtnWin");
endGamePrizeEasyWinBtn.addEventListener("click", showPrizeWinEasy);
let easyPrizeWinVideo = document.querySelector("#easyPrizeVideoWin");
function showPrizeWinEasy() {
  easyPrizeWinVideo.style.display = "block";
  easyPrizeMenuBtn.style.display = "block";
}
let endGamePrizeEasyLoseBtn = document.querySelector("#endGamePrizeBtnLose");
endGamePrizeEasyLoseBtn.addEventListener("click", showPrizeLoseEasy);
let easyPrizeLoseVideo = document.querySelector("#easyPrizeVideoLose");
function showPrizeLoseEasy() {
  easyPrizeLoseVideo.style.display = "block";
  easyPrizeMenuBtn.style.display = "block";
}
// change theme
let changeThemeBtn = document.querySelector("#changeTheme");
changeThemeBtn.addEventListener("click", changeTheme);
let changeThemeValue = 0;

function changeTheme() {
  if (changeThemeValue == 0) {
    changeThemeValue = 1;
    greenTheme();
  } else if (changeThemeValue == 1) {
    changeThemeValue = 0;
    pinkTheme();
  }
}
function greenTheme() {
  changeThemeBtn.src = "images/sun.png";
  let greenBtn = document.querySelectorAll(".greenBtn");
  let loadingAnimation = document.querySelector("#loadingAnimation");
  let endGameScreen = document.querySelector("#endGameScreen");
  let mediaIcon = document.querySelectorAll(".mediaIcon");
  document.body.style.backgroundImage = "url(images/backgroundGreen.jpg)";
  endGameScreen.style.backgroundColor = "#30734a";
  endGameScreen.style.borderColor = "#30734a";
  menu.style.borderColor = "#30734a";
  loadingAnimation.src = "images/loadingAnimationGreen.gif";
  gameInterface.style.borderColor = "#30734a";
  winScreen.style.borderColor = "#30734a";
  greenBtn.forEach((element) => {
    element.style.borderColor = "#98DFAF";
    element.style.backgroundColor = "#98DFAF";
    element.style.boxShadow = "0 0 15px #00000078";
    element.addEventListener("mouseenter", () => {
      element.style.boxShadow = "0 0 20px #DEEFB7";
      element.style.color = "#DEEFB7";
      element.style.backgroundColor = "#30734a";
    });
    element.addEventListener("mouseleave", () => {
      element.style.boxShadow = "0 0 20px #00000078";
      element.style.color = "black";
      element.style.backgroundColor = "#98DFAF";
    });
  });
  mediaIcon.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      element.style.boxShadow = "0 0 20px #DEEFB7";
    });
    element.addEventListener("mouseleave", () => {
      element.style.boxShadow = "0 0 20px #00000078";
    });
  });
}
function pinkTheme() {
  changeThemeBtn.src = "images/moon.png";
  let greenBtn = document.querySelectorAll(".greenBtn");
  let loadingAnimation = document.querySelector("#loadingAnimation");
  let endGameScreen = document.querySelector("#endGameScreen");
  let mediaIcon = document.querySelectorAll(".mediaIcon");
  document.body.style.backgroundImage = "url(images/background.jpg)";
  endGameScreen.style.backgroundColor = "#ec99ca";
  endGameScreen.style.borderColor = "#ff84a5d9";
  menu.style.borderColor = "#ff84a5d9";
  loadingAnimation.src = "images/loadingAnimation.gif";
  gameInterface.style.borderColor = "#ff84a5d9";
  winScreen.style.borderColor = "#ff84a5d9";
  greenBtn.forEach((element) => {
    element.style.borderColor = "#ff84a5d9";
    element.style.backgroundColor = "#ff84a5d9";
    element.style.boxShadow = "0 0 15px #00000078";
    element.addEventListener("mouseenter", () => {
      element.style.boxShadow = "0 0 20px #ff84a5d9";
      element.style.color = "white";
      element.style.backgroundColor = "#c24a6ad9";
    });
    element.addEventListener("mouseleave", () => {
      element.style.boxShadow = "0 0 20px #00000078";
      element.style.color = "black";
      element.style.backgroundColor = "#ff84a5d9";
    });
  });
  mediaIcon.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      element.style.boxShadow = "0 0 20px #ff84a5d9";
    });
    element.addEventListener("mouseleave", () => {
      element.style.boxShadow = "0 0 20px #00000078";
    });
  });
}
