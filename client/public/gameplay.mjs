import { tileBag } from './tiles.mjs';
// const wordStacks = []; // keeping track of tiles being played to make a word

async function reportWordValidity() {
  // userWord linked to placeholder in html
  const userWord = document.querySelector('#word-validity').value;
  const result = document.querySelector('#result');
  const boardLetters = document.querySelectorAll('.board-letters');
  // using fetch api to connect the dictionary
  const response = await fetch('./csw_3.txt');
  const dictionary = await response.text();

  if (userWord.length === 0 || userWord.length === 1) {
    result.textContent = 'Enter a word with 2 or more letters';
  } else if (dictionary.indexOf(userWord.toUpperCase()) === -1) {
    result.textContent = userWord.toUpperCase() + 'is not a valid word';
  } else if (dictionary.indexOf(userWord.toUpperCase()) > -1) {
    result.textContent = userWord.toUpperCase() + ' is a valid word';
    for (const boardLetter of boardLetters) {
      // look up table matching letters to their respective values
      const letterValues = { A: 1, B: 3, C: 3, D: 2, E: 1, F: 4, G: 2, H: 4, I: 1, J: 8, K: 5, L: 1, M: 3, N: 1, O: 1, P: 3, Q: 10, R: 1, S: 1, T: 1, U: 1, V: 4, W: 4, X: 8, Y: 4, Z: 10 };
      const letterScore = letterValues[boardLetter.textContent];

      if (boardLetter.draggable === true) {
        // showing player score on webpage
        const player1Score = document.querySelector('#player1Score');
        player1Score.textContent = letterScore + Number(player1Score.textContent);
      }
    }
    const lettersOnBoard = document.querySelectorAll('div > div');
    for (const letterOnBoard of lettersOnBoard) {
      // removing the draggable attribute from correctly placed words
      letterOnBoard.removeAttribute('draggable');
    }
  }
}

// removing tiles from tilebag whenever they are added to the player rack before being played onto the board
function removeTiles() {
  const boardLetters = document.getElementsByClassName('board-letters');
  for (let i = 0; i < boardLetters.length; i += 1) {
    if (boardLetters[i].draggable === true) {
      const boardLetterContent = boardLetters[i].textContent;
      tileBag.splice(boardLetterContent, 1);
    }
  }
}

// game ends when there are no tiles left in the tile bag
function checkingEndGame() {
  const result = document.querySelector('#result');
  const player1Score = document.querySelector('#player1Score');
  if (tileBag.length === 0) {
    result.textContent = `Game over! your final score is ${player1Score.textContent}`;
  }
}

export function prepGamePlay() {
  const playButton = document.querySelector('.play-move');
  playButton.addEventListener('click', reportWordValidity);
  playButton.addEventListener('click', removeTiles);
  playButton.addEventListener('click', checkingEndGame);
}
