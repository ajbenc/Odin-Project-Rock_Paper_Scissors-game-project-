//definicion basica de botones principales

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const resetButton = document.querySelector('.resetButton');
const userInpunt = document.querySelector('#userChoice');
const pcInpunt = document.querySelector('#pcChoice');
const userFinalScore = document.querySelector('#userScore');
const computerFinalScore = document.querySelector('#pcScore');
const changingTitle = document.querySelector('#startTitle');

let userScore = 0;
let computerScore = 0;

//hacer un addEventListener para cada boton y triggerear el efecto de este

rock.onclick = () => {
  userInpunt.textContent = 'Rock';
  displayComputerChoice();
};

paper.onclick = () => {
  userInpunt.textContent = 'Paper';
  displayComputerChoice();
};

scissors.onclick = () => {
  userInpunt.textContent = 'Scissors';
  displayComputerChoice();
};


//realizar un bucle con condicional que escoja entre las 3 opciones un versus entre usuario y valor aleatorio el pc

const choices = ['Rock', 'Paper', 'Scissors'];

const getComputerChoice = () => {
const randomIndex = Math.floor(Math.random() * choices.length);
return choices[randomIndex];
};

const displayComputerChoice = () => {
const computerChoice = getComputerChoice();
pcInpunt.textContent = computerChoice;
finalValue();
checkWinner();
};

//hacer equivalencia de los valores

const finalValue = () => {
const changingTitle = document.querySelector('#startTitle');

if (userInpunt.textContent === 'Rock' && pcInpunt.textContent === 'Rock') {
changingTitle.textContent = 'Draw';
changingTitle.style.color = 'rgb(57, 54, 63)';
} else if (userInpunt.textContent === 'Paper' && pcInpunt.textContent === 'Paper') {
changingTitle.textContent = 'Draw';
changingTitle.style.color = 'rgb(57, 54, 63)';
} else if (userInpunt.textContent === 'Scissors' && pcInpunt.textContent === 'Scissors') {
changingTitle.textContent = 'Draw';
changingTitle.style.color = 'rgb(57, 54, 63)';
} else if (userInpunt.textContent === 'Rock' && pcInpunt.textContent === 'Scissors') {
changingTitle.textContent = 'You Win!';
changingTitle.style.color = 'green';
} else if (userInpunt.textContent === 'Rock' && pcInpunt.textContent === 'Paper') {
changingTitle.textContent = 'You Lose!';
changingTitle.style.color = 'red';
} else if (userInpunt.textContent === 'Paper' && pcInpunt.textContent === 'Rock') {
changingTitle.textContent = 'You Win!';
changingTitle.style.color = 'green';
} else if (userInpunt.textContent === 'Paper' && pcInpunt.textContent === 'Scissors') {
changingTitle.textContent = 'You Lose!';
changingTitle.style.color = 'red';
} else if (userInpunt.textContent === 'Scissors' && pcInpunt.textContent === 'Paper') {
changingTitle.textContent = 'You Win!';
changingTitle.style.color = 'green';
} else if (userInpunt.textContent === 'Scissors' && pcInpunt.textContent === 'Rock') {
changingTitle.textContent = 'You Lose!';
changingTitle.style.color = 'red';
} else {
changingTitle.textContent = 'Start Game!';
}
};

//cada vez que se cumpla el bucle tiene que imprimirse en userChoice y pcChoice, sus puntajes

const checkWinner = () => {

const userChoice = userInpunt.textContent;
const computerChoice = pcInpunt.textContent;

if (userChoice === computerChoice) {
    changingTitle.textContent = 'Draw'
} else if (
(userChoice === 'Rock' && computerChoice === 'Scissors') ||
(userChoice === 'Paper' && computerChoice === 'Rock') ||
(userChoice === 'Scissors' && computerChoice === 'Paper')
) {
userScore++;
userFinalScore.textContent = userScore;
} else {
computerScore++;
computerFinalScore.textContent = computerScore;
}
};
//instalar boton de reset.

resetButton.onclick = () => {
    // Reset scores
    userScore = 0;
    computerScore = 0;
    userFinalScore.textContent = userScore;
    computerFinalScore.textContent = computerScore;
  
    // Reset game status title
    changingTitle.textContent = 'Start Game!';
  
    // Reset user and computer choices
    userInpunt.textContent = '';
    pcInpunt.textContent = '';
  };
  
  rock.addEventListener('click', () => {
    userInpunt.textContent = 'Rock';
    displayComputerChoice();
  });
  
  paper.addEventListener('click', () => {
    userInpunt.textContent = 'Paper';
    displayComputerChoice();
  });
  
  scissors.addEventListener('click', () => {
    userInpunt.textContent = 'Scissors';
    displayComputerChoice();
  });
  

