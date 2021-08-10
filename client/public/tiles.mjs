export const player1Stacks = []; // keeping track of the tiles player1 has
export const tileBag = []; // letters in our bag

const letterTiles = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ''];
const quantities = [9, 2, 2, 4, 12, 2, 3, 2, 9, 1, 1, 4, 2, 6, 8, 2, 1, 6, 4, 6, 4, 2, 2, 1, 2, 1, 2];
const letterValues = { A: 1, B: 3, C: 3, D: 2, E: 1, F: 4, G: 2, H: 4, I: 1, J: 8, K: 5, L: 1, M: 3, N: 1, O: 1, P: 3, Q: 10, R: 1, S: 1, T: 1, U: 1, V: 4, W: 4, X: 8, Y: 4, Z: 10 }; // look up table matching letters to relevant values
let count = 0;

function tileCreation() {
  // generation of the letters in the tile bag
  for (let i = 0; i <= letterTiles.length; i++) {
    for (let j = 0; j <= quantities[i]; j++) {
      tileBag.push(letterTiles[i]);
    }
  }

  // adapted from https://discuss.codecademy.com/t/selecting-6-random-elements-from-an-array/251310
  // pushing 7 letters into the player's rack
  for (let i = 0; i < 7; i++) {
    const randomTile = tileBag[Math.floor(Math.random() * tileBag.length)];
    player1Stacks.push(randomTile);
  }
}

// personal code
// dealing with the blank tiles
function blankTiles(e) {
  const data = e.dataTransfer.getData('text/plain');
  const dragged = document.getElementById(data);
  if (dragged.textContent === '') {
    const letterChoice = prompt('Which letter would you like to choose? ').toUpperCase();
    dragged.textContent = letterChoice;
    dragged.dataset.score = letterValues[letterChoice];
  }
}


// creating the letters to appear in rack
// adapted from https://www.javascripttutorial.net/javascript-dom/javascript-append/
function fillRack() {
  const playerRack = document.querySelector('.player-rack');
  const nodes = player1Stacks.map(player1Stack => {
    const div = document.createElement('div');
    div.setAttribute('draggable', true);
    div.setAttribute('class', 'letters');
    div.textContent = player1Stack;
    div.id = 'letter' + count;
    count += 1;
    return div;
  });
  playerRack.append(...nodes);
}

// adapted from https://hacks.mozilla.org/2012/10/using-data-attributes-in-javascript-and-css/
// getting the score of the letters to appear in corner
function dataScore() {
  const letterScores = document.querySelectorAll('.letters');
  for (const letterScore of letterScores) {
    letterScore.dataset.score = letterValues[letterScore.textContent];
  }
}


// refilling the stack
function refillRack() {
  const playerRack = document.querySelector('.player-rack');
  // adapted from https://www.w3schools.com/jsref/prop_nodelist_length.asp.
  const playerRackCount = playerRack.getElementsByTagName('div');
  while (playerRackCount.length < 7) {
    const randomTile = tileBag[Math.floor(Math.random() * tileBag.length)];
    player1Stacks.push(randomTile);
    const div = document.createElement('div');
    div.setAttribute('draggable', true);
    div.textContent = randomTile;
    div.setAttribute('class', 'letters');
    div.id = 'letter' + count;
    count += 1;
    div.dataset.score = letterValues[div.textContent];
    playerRack.append(div);
  }
}

export function prepTiles() {
  const playButton = document.querySelector('.play-move');
  tileCreation();
  fillRack();
  dataScore();
  playButton.addEventListener('click', refillRack);
  window.addEventListener('drop', blankTiles);
}
