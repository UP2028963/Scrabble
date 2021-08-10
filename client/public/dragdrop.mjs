import { board } from './board.mjs';


// dragging and dropping of tiles
// adapted from https://github.com/portsoc/ws_drag/blob/master/examples/drag-drop-move/script.js
function dragStartHandler(e) {
  const data = e.target.id;
  e.dataTransfer.setData('text/plain', data);
}

function dragOverHandler(e) {
  e.preventDefault();
}

function dropHandler(e) {
  const data = e.dataTransfer.getData('text/plain');
  const dragged = document.getElementById(data);

  board[e.target.dataset.y][e.target.dataset.x] = dragged.textContent;

  e.target.append(dragged);
}

function dropHandlerReverse(e) {
  const data = e.dataTransfer.getData('text/plain');
  const dragged = document.getElementById(data);

  e.target.append(dragged);
}

// personal code begins again here
function boardLettersClass(e) {
  const data = e.dataTransfer.getData('text/plain');
  const dragged = document.getElementById(data);

  // giving letters that have just been dragged the class board-letters
  dragged.classList.add('board-letters');
}

// (x,y) of where each letter has been dropped
function letterPositions(e) {
  const data = e.dataTransfer.getData('text/plain');
  const dragged = document.getElementById(data);
  dragged.dataset.y = e.target.dataset.y;
  dragged.dataset.x = e.target.dataset.x;
  const letterPosition = [];
  letterPosition.push({ y: e.target.dataset.y, x: e.target.dataset.x });
}

export function prep() {
  const drophere = document.querySelectorAll('.all-tiles');
  for (const drop of drophere) {
    drop.addEventListener('dragover', dragOverHandler);
    drop.addEventListener('drop', dropHandler);
  }

  const dragme = document.querySelectorAll('.player-rack');
  for (const dr of dragme) {
    dr.addEventListener('dragstart', dragStartHandler);
  }
  window.addEventListener('drop', boardLettersClass);
  window.addEventListener('drop', letterPositions);
}

function prepReverse() {
  const drophere = document.querySelector('.player-rack');

  drophere.addEventListener('dragover', dragOverHandler);
  drophere.addEventListener('drop', dropHandlerReverse);

  const dragme = document.querySelectorAll('.all-tiles');
  for (const dr of dragme) {
    dr.addEventListener('dragstart', dragStartHandler);
  }
}
window.addEventListener('load', prepReverse);
