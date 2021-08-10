import { prep } from './dragdrop.mjs';

// making the game board
let count = 0;
function makeBoard() {
  for (let y = 0; y < 15; y += 1) {
    for (let x = 0; x < 15; x += 1) {
      const board = document.querySelector('.all-tiles');
      const div = document.createElement('div');
      div.id = 'tile' + count;
      // (x,y) coordinates of board tiles
      div.dataset.x = x;
      div.dataset.y = y;
      count += 1;
      board.append(div);
    }
  }
}

// dealing with the special tiles on the board
function specialTiles() {
  const tripleWords = document.querySelectorAll('#tile0, #tile7, #tile14, #tile105, #tile119, #tile210, #tile217, #tile224');
  for (let i = 0; i < tripleWords.length; i++) {
    tripleWords[i].setAttribute('class', 'triple-word');
    tripleWords[i].textContent = 'TW';
  }

  const doubleWords = document.querySelectorAll('#tile16, #tile28, #tile32, #tile42, #tile48, #tile56, #tile64, #tile70, #tile154, #tile160, #tile168, #tile176, #tile182, #tile192, #tile196, #tile208');
  for (let i = 0; i < doubleWords.length; i++) {
    doubleWords[i].setAttribute('class', 'double-word');
    doubleWords[i].textContent = 'DW';
  }

  const doubleLetters = document.querySelectorAll('#tile3, #tile11, #tile36, #tile38, #tile45, #tile52, #tile59, #tile92, #tile102, #tile96, #tile98, #tile108, #tile116, #tile122, #tile126, #tile128, #tile132, #tile165, #tile172, #tile179, #tile186, #tile188, #tile213, #tile221');
  for (let i = 0; i < doubleLetters.length; i++) {
    doubleLetters[i].setAttribute('class', 'double-letter');
    doubleLetters[i].textContent = 'DL';
  }

  const tripleLetters = document.querySelectorAll('#tile20, #tile24, #tile76, #tile80, #tile84, #tile88, #tile136, #tile140, #tile144, #tile148, #tile200, #tile204');
  for (let i = 0; i < tripleLetters.length; i++) {
    tripleLetters[i].setAttribute('class', 'triple-letter');
    tripleLetters[i].textContent = 'TL';
  }

  const starSquare = document.querySelector('#tile112');
  starSquare.setAttribute('id', 'star-square');
  starSquare.textContent = '⭐️';
}


// array of arrays to see where we placed our words
export const board = [];
function arrayBoard() {
  for (let i = 0; i < 15; i += 1) {
    const line = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
    board.push(line);
    // console.log(board[0][0]);
  }
}

export function prepBoard() {
  makeBoard();
  specialTiles();
  arrayBoard();
  window.addEventListener('load', prep);
}
